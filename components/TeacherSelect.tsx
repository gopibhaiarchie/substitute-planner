
import React, { useState } from 'react';
import { Teacher } from '../types';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

interface TeacherSelectProps {
  teachers: Teacher[];
  selectedTeacherIds: number[];
  onSelectTeacher: (teacherId: number) => void;
  onEditTeacher: (teacherId: number) => void;
  onDeleteTeacher: (teacherId: number) => void;
}

const TeacherSelect: React.FC<TeacherSelectProps> = ({ teachers, selectedTeacherIds, onSelectTeacher, onEditTeacher, onDeleteTeacher }) => {
  const [confirmingDeleteId, setConfirmingDeleteId] = useState<number | null>(null);

  return (
    <div className="max-h-64 overflow-y-auto pr-2 space-y-2">
      {teachers.map(teacher => {
        const isConfirmingDelete = confirmingDeleteId === teacher.id;

        return (
          <div
            key={teacher.id}
            onClick={() => !isConfirmingDelete && onSelectTeacher(teacher.id)}
            className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
              isConfirmingDelete
                ? 'bg-red-900/50 border-l-4 border-red-500'
                : selectedTeacherIds.includes(teacher.id)
                  ? 'bg-indigo-500/30 border-l-4 border-indigo-500 cursor-pointer'
                  : 'bg-gray-700/50 hover:bg-gray-600/50 border-l-4 border-transparent cursor-pointer'
            }`}
            role="checkbox"
            aria-checked={!isConfirmingDelete && selectedTeacherIds.includes(teacher.id)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (!isConfirmingDelete && (e.key === ' ' || e.key === 'Enter')) {
                e.preventDefault();
                onSelectTeacher(teacher.id);
              }
            }}
          >
            {isConfirmingDelete ? (
              <div className="flex items-center justify-between w-full text-sm">
                <span className="font-semibold text-red-300">Are you sure?</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setConfirmingDeleteId(null); }}
                    className="px-2 py-1 font-medium rounded-md text-gray-300 bg-gray-600 hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteTeacher(teacher.id);
                      setConfirmingDeleteId(null);
                    }}
                    className="px-2 py-1 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center flex-grow pointer-events-none">
                    <input
                        type="checkbox"
                        readOnly
                        checked={selectedTeacherIds.includes(teacher.id)}
                        className="h-5 w-5 rounded bg-gray-600 border-gray-500 text-indigo-500 focus:ring-0 focus:ring-offset-0"
                        tabIndex={-1}
                    />
                    <span className="ml-3 text-white">{teacher.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <button 
                      onClick={(e) => {
                          e.stopPropagation();
                          onEditTeacher(teacher.id);
                      }} 
                      className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-600 transition-colors"
                      aria-label={`Edit ${teacher.name}`}
                  >
                      <PencilIcon className="h-5 w-5" />
                  </button>
                  <button 
                      onClick={(e) => {
                          e.stopPropagation();
                          setConfirmingDeleteId(teacher.id);
                      }} 
                      className="p-1 text-red-400 hover:text-red-300 rounded-full hover:bg-red-900/50 transition-colors"
                      aria-label={`Delete ${teacher.name}`}
                  >
                      <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  );
};

export default TeacherSelect;
