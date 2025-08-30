import React, { useState, useEffect } from 'react';
import { Teacher, Day, Timetable } from '../types';

interface EditTeacherModalProps {
  teacher: Teacher;
  onSave: (updatedTeacher: Teacher) => void;
  onClose: () => void;
}

const DAYS: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const PERIODS = Array.from({ length: 8 }, (_, i) => i + 1);
const ALL_CLASS_SECTIONS = ['6A','6B','6C','6D','7A','7B','7C','7D','8A','8B','8C','8D','9A','9B','9C','9D','10A','10B','10C','10D','11A','11B','11C','11D','12A','12B','12C','12D'];


const EditTeacherModal: React.FC<EditTeacherModalProps> = ({ teacher, onSave, onClose }) => {
  const [name, setName] = useState(teacher.name);
  const [classSections, setClassSections] = useState(teacher.class_sections.join(', '));
  const [timetable, setTimetable] = useState<Timetable>(teacher.timetable);
  const [points, setPoints] = useState(teacher.points);
  const [preference, setPreference] = useState(teacher.preference || '');

  useEffect(() => {
    setName(teacher.name);
    setClassSections(teacher.class_sections.join(', '));
    setTimetable(JSON.parse(JSON.stringify(teacher.timetable))); // Deep copy
    setPoints(teacher.points);
    setPreference(teacher.preference || '');
  }, [teacher]);

  const handleTimetableChange = (day: Day, periodIndex: number, value: string) => {
    const newTimetable = { ...timetable };
    newTimetable[day] = [...newTimetable[day]]; // Ensure array is mutable
    newTimetable[day][periodIndex] = value;
    setTimetable(newTimetable);
  };

  const handleSave = () => {
    const updatedTeacher: Teacher = {
      ...teacher,
      name,
      class_sections: classSections.split(',').map(s => s.trim()).filter(Boolean),
      timetable,
      points: Number(points) || 0,
      preference: preference.trim(),
    };
    onSave(updatedTeacher);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Edit Teacher Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none">&times;</button>
        </header>

        <main className="p-6 overflow-y-auto space-y-6 text-gray-300">
          {/* Teacher Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <label htmlFor="teacherName" className="block text-sm font-medium text-gray-400 mb-1">Teacher Name</label>
              <input
                id="teacherName"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="teacherPoints" className="block text-sm font-medium text-gray-400 mb-1">Points</label>
              <input
                id="teacherPoints"
                type="number"
                value={points}
                onChange={e => setPoints(Number(e.target.value))}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="teacherPreference" className="block text-sm font-medium text-gray-400 mb-1">Substitution Preference</label>
              <input
                id="teacherPreference"
                type="text"
                value={preference}
                onChange={e => setPreference(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., 9A"
              />
            </div>
            <div className="md:col-span-3">
              <label htmlFor="classSections" className="block text-sm font-medium text-gray-400 mb-1">Class Sections (comma-separated)</label>
              <input
                id="classSections"
                type="text"
                value={classSections}
                onChange={e => setClassSections(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Timetable Editor */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Timetable</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-center">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="p-2 w-12 font-medium text-indigo-300 sticky left-0 bg-gray-700/50">P.</th>
                    {DAYS.map(day => (
                      <th key={day} className="p-2 font-medium text-indigo-300">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PERIODS.map((period, periodIndex) => (
                    <tr key={period} className="border-b border-gray-700">
                      <td className="p-2 font-bold bg-gray-700/50 sticky left-0">{period}</td>
                      {DAYS.map(day => (
                        <td key={day} className="p-1 relative">
                          <select
                            value={timetable[day]?.[periodIndex] ?? '-'}
                            onChange={e => handleTimetableChange(day, periodIndex, e.target.value)}
                            className="w-full h-full bg-gray-900/50 hover:bg-gray-700 focus:bg-gray-600 text-center rounded-md border-none text-white p-2 pr-10 appearance-none"
                          >
                            <option value="-">-</option>
                            {ALL_CLASS_SECTIONS.map(cls => (
                              <option key={cls} value={cls}>{cls}</option>
                            ))}
                          </select>
                           <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                              </svg>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <footer className="p-4 bg-gray-800 border-t border-gray-700 flex justify-end items-center space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-md text-gray-300 bg-gray-600 hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Save Changes
          </button>
        </footer>
      </div>
    </div>
  );
};

export default EditTeacherModal;