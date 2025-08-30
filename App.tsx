
import React, { useState, useMemo, useRef, ChangeEvent } from 'react';
import { Day, Substitution, Teacher } from './types';
import { TEACHER_DATA } from './services/teacherData';
import { findSubstitutions } from './utils/substitutionLogic';
import TeacherSelect from './components/TeacherSelect';
import DaySelector from './components/DaySelector';
import SubstitutionTable from './components/SubstitutionTable';
import UserGroupIcon from './components/icons/UserGroupIcon';
import CalendarIcon from './components/icons/CalendarIcon';
import TableIcon from './components/icons/TableIcon';
import EditTeacherModal from './components/EditTeacherModal';
import PlusIcon from './components/icons/PlusIcon';
import SaveIcon from './components/icons/SaveIcon';
import UploadIcon from './components/icons/UploadIcon';

export default function App() {
  const [absentTeacherIds, setAbsentTeacherIds] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<Day>('Mon');
  const [substitutions, setSubstitutions] = useState<Substitution[]>([]);
  const [substitutionsGrid, setSubstitutionsGrid] = useState<Record<string, Record<number, Substitution>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [teachers, setTeachers] = useState<Teacher[]>(TEACHER_DATA);
  const [teacherToEdit, setTeacherToEdit] = useState<Teacher | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTeacherSelection = (teacherId: number) => {
    setAbsentTeacherIds(prev =>
      prev.includes(teacherId)
        ? prev.filter(id => id !== teacherId)
        : [...prev, teacherId]
    );
  };
  
  const handleOpenEditModal = (teacherId: number) => {
    const teacher = teachers.find(t => t.id === teacherId);
    if (teacher) {
        setTeacherToEdit(teacher);
    }
  };

  const handleCloseEditModal = () => {
    setTeacherToEdit(null);
  };

  const handleSaveTeacher = (updatedTeacher: Teacher) => {
    setTeachers(prevTeachers => 
        prevTeachers.map(t => t.id === updatedTeacher.id ? updatedTeacher : t)
    );
    setTeacherToEdit(null);
  };

  const handleAddTeacher = () => {
    const newId = teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1;
    const newTeacher: Teacher = {
        id: newId,
        name: `New Teacher ${newId}`,
        class_sections: [],
        points: 0,
        timetable: {
            Mon: Array(8).fill('-'),
            Tue: Array(8).fill('-'),
            Wed: Array(8).fill('-'),
            Thu: Array(8).fill('-'),
            Fri: Array(8).fill('-'),
            Sat: Array(8).fill('-'),
        },
    };
    setTeachers(prev => [...prev, newTeacher]);
  };

  const handleDeleteTeacher = (teacherId: number) => {
    setTeachers(prev => prev.filter(t => t.id !== teacherId));
    setAbsentTeacherIds(prev => prev.filter(id => id !== teacherId));
  };

  const handleFindSubstitutes = () => {
    if (absentTeacherIds.length === 0) {
      alert("Please select at least one absent teacher.");
      return;
    }
    setIsLoading(true);
    setHasGenerated(true);
    setTimeout(() => {
      const result = findSubstitutions(absentTeacherIds, selectedDay, teachers);
      setSubstitutions(result);

      const gridData: Record<string, Record<number, Substitution>> = {};
      result.forEach(sub => {
          if (!gridData[sub.absentTeacher]) {
              gridData[sub.absentTeacher] = {};
          }
          gridData[sub.absentTeacher][sub.period] = sub;
      });
      setSubstitutionsGrid(gridData);

      setIsLoading(false);
    }, 500);
  };

  const handleSaveData = () => {
    try {
      const dataStr = JSON.stringify(teachers, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'teacher-data.json';
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      alert('Data saved successfully as teacher-data.json!');
    } catch (error) {
      console.error("Failed to save data:", error);
      alert('Failed to save data. See console for details.');
    }
  };

  const handleLoadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text !== 'string') {
          throw new Error("File could not be read as text.");
        }
        const loadedTeachers = JSON.parse(text);
        
        if (Array.isArray(loadedTeachers) && loadedTeachers.every(t => 'id' in t && 'name' in t && 'timetable' in t)) {
          setTeachers(loadedTeachers);
          setAbsentTeacherIds([]);
          setSubstitutions([]);
          setSubstitutionsGrid({});
          setHasGenerated(false);
          alert('Data loaded successfully!');
        } else {
          throw new Error("Invalid file format. Please load a 'teacher-data.json' file that was previously saved from this application.");
        }
      } catch (error) {
        console.error("Failed to load or parse file:", error);
        alert(`Failed to load data. ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        if(event.target) event.target.value = '';
      }
    };
    reader.onerror = () => {
        alert('Error reading file.');
        if(event.target) event.target.value = '';
    };
    reader.readAsText(file);
  };

  const handleLoadClick = () => {
    fileInputRef.current?.click();
  };
  
  const absentTeachers = useMemo(() => {
    return teachers
      .filter(t => absentTeacherIds.includes(t.id));
  }, [absentTeacherIds, teachers]);

  const absentTeacherNames = useMemo(() => absentTeachers.map(t => t.name), [absentTeachers]);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-indigo-400">Teacher Substitution Planner</h1>
              <p className="mt-2 text-lg text-gray-400">Automated substitute teacher assignments</p>
            </div>
             <div className="flex items-center gap-2 self-center sm:self-auto">
                <button
                    onClick={handleLoadClick}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600 transition-colors"
                    aria-label="Load teacher data from a file"
                >
                    <UploadIcon className="h-5 w-5" />
                    Load
                </button>
                <button
                    onClick={handleSaveData}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    aria-label="Save teacher data to a file"
                >
                    <SaveIcon className="h-5 w-5" />
                    Save
                </button>
            </div>
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleLoadFile} 
                className="hidden" 
                accept="application/json,.json"
            />
          </header>

          <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center"><UserGroupIcon className="h-6 w-6 mr-2 text-indigo-400" />1. Select Absent Teachers</h2>
                    <button
                        onClick={handleAddTeacher}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md text-indigo-300 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors"
                        aria-label="Add a new teacher"
                    >
                        <PlusIcon className="h-5 w-5" />
                        Add
                    </button>
                </div>

                <TeacherSelect
                  teachers={teachers}
                  selectedTeacherIds={absentTeacherIds}
                  onSelectTeacher={handleTeacherSelection}
                  onEditTeacher={handleOpenEditModal}
                  onDeleteTeacher={handleDeleteTeacher}
                />
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center"><CalendarIcon className="h-6 w-6 mr-2 text-indigo-400" />2. Select Day</h2>
                <DaySelector selectedDay={selectedDay} onSelectDay={setSelectedDay} />
              </div>

              <button
                onClick={handleFindSubstitutes}
                disabled={isLoading || absentTeacherIds.length === 0}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg text-lg transition-all duration-300 shadow-lg"
              >
                {isLoading ? 'Generating...' : 'Find Substitutes'}
              </button>
            </div>

            <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center"><TableIcon className="h-6 w-6 mr-2 text-indigo-400" />3. Substitution Plan</h2>
              {hasGenerated ? (
                isLoading ? (
                  <div className="flex justify-center items-center h-full">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-400"></div>
                  </div>
                ) : (
                  <SubstitutionTable 
                      substitutions={substitutions}
                      substitutionsGrid={substitutionsGrid} 
                      day={selectedDay} 
                      absentTeacherNames={absentTeacherNames}
                  />
                )
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                  <TableIcon className="h-16 w-16 mb-4"/>
                  <p>Your substitution plan will appear here.</p>
                  <p>Select absent teachers and a day, then click "Find Substitutes".</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      {teacherToEdit && (
        <EditTeacherModal 
            teacher={teacherToEdit}
            onSave={handleSaveTeacher}
            onClose={handleCloseEditModal}
        />
      )}
    </>
  );
}
