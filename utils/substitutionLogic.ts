
import { Day, Substitution, Teacher } from '../types';

const MAX_SUBSTITUTIONS_PER_TEACHER = 2;

export const findSubstitutions = (
  absentTeacherIds: number[],
  day: Day,
  allTeachers: Teacher[]
): Substitution[] => {
  const substitutions: Substitution[] = [];
  const substitutionCounts: { [teacherId: number]: number } = {};

  const absentTeachers = allTeachers.filter(t => absentTeacherIds.includes(t.id));
  const availableTeachers = allTeachers.filter(t => !absentTeacherIds.includes(t.id));

  allTeachers.forEach(t => {
    substitutionCounts[t.id] = 0;
  });

  for (const absentTeacher of absentTeachers) {
    const scheduleForDay = absentTeacher.timetable[day];

    scheduleForDay.forEach((classSection, periodIndex) => {
      if (classSection !== '-') {
        const period = periodIndex + 1;
        const grade = parseInt(classSection.match(/^\d+/)?.[0] || '0', 10);

        let foundSubstitute: Teacher | undefined;
        let reason = '';
        let isFallback = false;

        const isAvailable = (teacher: Teacher) =>
          teacher.timetable[day][periodIndex] === '-' &&
          (substitutionCounts[teacher.id] || 0) < MAX_SUBSTITUTIONS_PER_TEACHER;
        
        const isSeniorTeacher = (teacher: Teacher) => 
          teacher.class_sections.some(cs => cs.startsWith('11') || cs.startsWith('12'));

        // Apply substitution logic based on grade level
        if (grade >= 11) {
          // SENIOR CLASS LOGIC (Grade 11 & 12)
          // Stricter Rule: Only teachers who teach other grade 11/12 sections can substitute.
          const potentialSubstitutes = availableTeachers.filter(
            t => isAvailable(t) && isSeniorTeacher(t)
          );

          if (potentialSubstitutes.length > 0) {
            // Try to find a substitute who teaches the *exact same section*.
            const idealSubstitutes = potentialSubstitutes.filter(t => t.class_sections.includes(classSection));

            if (idealSubstitutes.length > 0) {
              idealSubstitutes.sort((a, b) => b.points - a.points);
              foundSubstitute = idealSubstitutes[0];
              reason = `Teaches ${classSection}`;
              isFallback = false;
            } else {
              // If no one teaches the exact section, find any other available senior teacher.
              potentialSubstitutes.sort((a, b) => b.points - a.points);
              foundSubstitute = potentialSubstitutes[0];
              reason = 'Senior Teacher Cover';
              isFallback = true; // Considered a fallback as it's not the ideal teacher.
            }
          }
          // If no suitable senior teacher is found, `foundSubstitute` remains undefined,
          // and the status will correctly be 'Not Found'. No fallback to junior teachers.
        } else {
          // JUNIOR CLASS LOGIC (Grades 6-10)
          // Rule: Any available teacher can substitute, prioritized by preference, then points.
          const potentialSubstitutes = availableTeachers.filter(isAvailable);
          
          if (potentialSubstitutes.length > 0) {
            // 1. Prioritize teachers who have this class as a preference
            const preferredSubstitutes = potentialSubstitutes.filter(
              t => t.preference && t.preference.trim().toLowerCase() === classSection.trim().toLowerCase()
            );

            if (preferredSubstitutes.length > 0) {
              // Sort preferred teachers by points
              preferredSubstitutes.sort((a, b) => b.points - a.points);
              foundSubstitute = preferredSubstitutes[0];
              reason = 'Preferred Class';
              isFallback = false; // This is a high-quality substitution
            } else {
              // 2. If no preference match, fall back to general pool, sorted by points
              potentialSubstitutes.sort((a, b) => b.points - a.points);
              foundSubstitute = potentialSubstitutes[0];
              reason = 'Free Period Cover';
              isFallback = true; // Standard assignment, but considered a fallback compared to preference
            }
          }
        }
        
        if (foundSubstitute) {
          substitutions.push({
            absentTeacher: absentTeacher.name,
            classSection,
            period,
            substituteTeacher: foundSubstitute.name,
            substituteTeacherPoints: foundSubstitute.points,
            reason,
            status: 'Assigned',
            isFallback,
          });
          substitutionCounts[foundSubstitute.id] = (substitutionCounts[foundSubstitute.id] || 0) + 1;
        } else {
          substitutions.push({
            absentTeacher: absentTeacher.name,
            classSection,
            period,
            status: 'Not Found',
            reason: 'No suitable teacher available',
          });
        }
      }
    });
  }

  return substitutions;
};