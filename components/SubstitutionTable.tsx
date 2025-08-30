import React from 'react';
import { Substitution, Day } from '../types';
import SubstitutionCard from './SubstitutionCard';

interface SubstitutionTableProps {
  substitutions: Substitution[];
  substitutionsGrid: Record<string, Record<number, Substitution>>;
  day: Day;
  absentTeacherNames: string[];
}

const PERIODS = Array.from({ length: 8 }, (_, i) => i + 1);

const SubstitutionTable: React.FC<SubstitutionTableProps> = ({ substitutions, substitutionsGrid, day, absentTeacherNames }) => {
  if (substitutions.length === 0 && absentTeacherNames.length > 0) {
    return (
        <div className="text-center text-gray-400 py-8">
            <p className="font-semibold">No substitutions required for {absentTeacherNames.join(', ')} on {day}.</p>
            <p>They have no classes scheduled for this day.</p>
        </div>
    )
  }

  return (
    <div className="overflow-x-auto">
        <div className="mb-4">
            <p className="text-gray-300"><span className="font-semibold">Day:</span> {day}</p>
            <p className="text-gray-300"><span className="font-semibold">Absent:</span> {absentTeacherNames.join(', ')}</p>
        </div>
      <table className="min-w-full text-sm text-left text-gray-300 border-collapse">
        <thead className="text-xs text-indigo-300 uppercase">
          <tr>
            <th scope="col" className="sticky left-0 z-10 p-3 bg-gray-800 border-b border-r border-gray-700 w-40">Teacher</th>
            {PERIODS.map(period => (
              <th key={period} scope="col" className="p-3 text-center border-b border-gray-700 bg-gray-700/50 min-w-[150px]">{`Period ${period}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {absentTeacherNames.map(name => (
            <tr key={name} className="hover:bg-gray-700/10">
              <th scope="row" className="sticky left-0 z-10 p-3 font-semibold text-white bg-gray-800 border-b border-r border-gray-700 whitespace-nowrap">
                {name}
              </th>
              {PERIODS.map(period => {
                const sub = substitutionsGrid[name]?.[period];
                return (
                  <td key={period} className={`p-1.5 align-top border-b border-gray-700 ${!sub && 'bg-gray-800/30'}`}>
                    <SubstitutionCard substitution={sub} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubstitutionTable;