export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

export type Timetable = {
  [key in Day]: string[]; // Array of 8 periods
};

export interface Teacher {
  id: number;
  name: string;
  class_sections: string[];
  timetable: Timetable;
  points: number;
  preference?: string;
}

export interface Substitution {
  absentTeacher: string;
  classSection: string;
  period: number;
  substituteTeacher?: string;
  substituteTeacherPoints?: number;
  reason?: string;
  status: 'Assigned' | 'Not Found';
  isFallback?: boolean;
}