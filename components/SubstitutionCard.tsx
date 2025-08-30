import React from 'react';
import { Substitution } from '../types';
import CheckCircleIcon from './icons/CheckCircleIcon';
import XCircleIcon from './icons/XCircleIcon';
import MoonIcon from './icons/MoonIcon';

interface SubstitutionCardProps {
  substitution?: Substitution;
}

const SubstitutionCard: React.FC<SubstitutionCardProps> = ({ substitution }) => {
  if (!substitution) {
    return (
      <div className="h-full min-h-[5rem] flex flex-col justify-center items-center text-gray-600 p-2">
        <MoonIcon className="w-6 h-6 mb-1" />
        <span className="text-xs font-medium">Free Period</span>
      </div>
    );
  }

  if (substitution.status === 'Not Found') {
    return (
      <div className="h-full min-h-[5rem] flex flex-col justify-center items-center p-2 rounded-lg bg-red-900/40 border border-red-700/50 text-red-300">
        <XCircleIcon className="w-7 h-7 mb-2" />
        <span className="font-bold text-center">{substitution.classSection}</span>
        <span className="text-xs text-center">No Substitute</span>
      </div>
    );
  }
  
  const isFallback = substitution.isFallback;

  const cardClasses = isFallback
    ? "bg-gradient-to-br from-cyan-900/60 to-gray-800/60 border border-cyan-700/50"
    : "bg-gradient-to-br from-indigo-900/60 to-gray-800/60 border border-indigo-700/50";

  const nameClasses = isFallback ? "text-cyan-300" : "text-green-300";

  const pointsClasses = isFallback
    ? "bg-cyan-500/20 text-cyan-300"
    : "bg-green-500/20 text-green-300";

  return (
    <div className={`h-full min-h-[5rem] flex flex-col justify-between p-2.5 rounded-lg shadow-md ${cardClasses}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`font-bold text-base ${nameClasses}`}>{substitution.substituteTeacher}</p>
          <p className="text-sm text-gray-200">{substitution.classSection}</p>
        </div>
        <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${pointsClasses}`} title="Teacher Points">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.83 4.401 4.793.696c.837.121 1.17.962.534 1.547l-3.468 3.38.82 4.775c.143.834-.698 1.487-1.45 1.074L10 15.547l-4.28 2.25c-.753.413-1.592-.24-1.45-1.074l.82-4.775L1.69 9.572c-.636-.585-.303-1.426.534-1.547l4.793-.696L8.852 2.884z" clipRule="evenodd" />
          </svg>
          {substitution.substituteTeacherPoints}
        </div>
      </div>
      <div className="text-right mt-1">
        <span className="text-xs text-gray-400 italic px-1.5 py-0.5 rounded-full bg-gray-700/70">
            {substitution.reason}
        </span>
      </div>
    </div>
  );
};

export default SubstitutionCard;