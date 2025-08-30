
import React from 'react';
import { Day } from '../types';

const DAYS: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface DaySelectorProps {
  selectedDay: Day;
  onSelectDay: (day: Day) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, onSelectDay }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
      {DAYS.map(day => (
        <button
          key={day}
          onClick={() => onSelectDay(day)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            selectedDay === day
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
