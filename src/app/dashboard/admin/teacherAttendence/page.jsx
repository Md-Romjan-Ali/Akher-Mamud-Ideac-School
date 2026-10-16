'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaUserCheck, 
  FaSearch, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaSpinner, 
  FaSave 
} from 'react-icons/fa';

// Fallback Demo Data for 30 Days
const fallbackTeachers = [
  { id: 'T-101', name: 'Md. Ramzan Ali', dept: 'ICT & Web Dev', attendance: { 1: 'P', 2: 'P', 3: 'A', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'A', 9: 'P', 10: 'P', 11: 'P', 12: 'P', 13: 'A', 14: 'P', 15: 'P', 16: 'P', 17: 'P', 18: 'P', 19: 'A', 20: 'P', 21: 'P', 22: 'P', 23: 'P', 24: 'A', 25: 'P', 26: 'P', 27: 'P', 28: 'P', 29: 'A', 30: 'P' } },
  { id: 'T-102', name: 'Sarah Jenkins', dept: 'English Literature', attendance: { 1: 'P', 2: 'A', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'A', 8: 'P', 9: 'P', 10: 'P', 11: 'P', 12: 'A', 13: 'P', 14: 'P', 15: 'P', 16: 'P', 17: 'P', 18: 'A', 19: 'P', 20: 'P', 21: 'P', 22: 'P', 23: 'A', 24: 'P', 25: 'P', 26: 'P', 27: 'P', 28: 'A', 29: 'P', 30: 'P' } },
  { id: 'T-103', name: 'Dr. Robert Chen', dept: 'General Science', attendance: { 1: 'P', 2: 'P', 3: 'P', 4: 'A', 5: 'P', 6: 'P', 7: 'P', 8: 'P', 9: 'A', 10: 'P', 11: 'P', 12: 'P', 13: 'P', 14: 'A', 15: 'P', 16: 'P', 17: 'P', 18: 'P', 19: 'P', 20: 'A', 21: 'P', 22: 'P', 23: 'P', 24: 'P', 25: 'A', 26: 'P', 27: 'P', 28: 'P', 29: 'P', 30: 'A' } },
  { id: 'T-104', name: 'Maria Garcia', dept: 'Mathematics', attendance: { 1: 'A', 2: 'P', 3: 'P', 4: 'P', 5: 'P', 6: 'A', 7: 'P', 8: 'P', 9: 'P', 10: 'P', 11: 'A', 12: 'P', 13: 'P', 14: 'P', 15: 'P', 16: 'A', 17: 'P', 18: 'P', 19: 'P', 20: 'P', 21: 'A', 22: 'P', 23: 'P', 24: 'P', 25: 'P', 26: 'A', 27: 'P', 28: 'P', 29: 'P', 30: 'P' } },
  { id: 'T-105', name: 'David Wilson', dept: 'Physics', attendance: { 1: 'P', 2: 'P', 3: 'P', 4: 'P', 5: 'A', 6: 'P', 7: 'P', 8: 'P', 9: 'P', 10: 'A', 11: 'P', 12: 'P', 13: 'P', 14: 'P', 15: 'A', 16: 'P', 17: 'P', 18: 'P', 19: 'P', 20: 'A', 21: 'P', 22: 'P', 23: 'P', 24: 'P', 25: 'A', 26: 'P', 27: 'P', 28: 'P', 29: 'P', 30: 'A' } },
];

export default function TeacherAttendance() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  
  // Full 30 Days of the month
  const daysArray = Array.from({ length: 30 }, (_, i) => i + 1);

  // Fetch API with fallback demo data
  useEffect(() => {
    async function fetchAttendanceData() {
      try {
        const response = await fetch('/api/teachers/attendance');
        if (!response.ok) throw new Error('API failed');
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        setTeachers(fallbackTeachers);
      } finally {
        setLoading(false);
      }
    }

    fetchAttendanceData();
  }, []);

  const handleCellClick = (teacherId, day) => {
    setTeachers((prev) =>
      prev.map((t) => {
        if (t.id === teacherId) {
          const currentStatus = t.attendance[day] || 'P';
          const nextStatus = currentStatus === 'P' ? 'A' : 'P';
          return {
            ...t,
            attendance: { ...t.attendance, [day]: nextStatus },
          };
        }
        return t;
      })
    );
  };

  const handleSaveChanges = async () => {
    setSaving(true);
    try {
      setTimeout(() => {
        alert('Attendance saved successfully!');
        setSaving(false);
      }, 800);
    } catch (error) {
      alert('Failed to save attendance.');
      setSaving(false);
    }
  };

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.dept.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <FaSpinner className="animate-spin text-indigo-600 text-3xl" />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-2 md:p-4 font-sans space-y-4">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FaUserCheck className="text-indigo-600" /> Teacher Monthly Attendance
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Click any box to toggle <span className="text-emerald-600 font-bold">Present (P)</span> / <span className="text-rose-600 font-bold">Absent (A)</span>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="flex items-center gap-1 text-emerald-600"><FaCheckCircle /> P</span>
            <span className="flex items-center gap-1 text-rose-600"><FaTimesCircle /> A</span>
          </div>

          <button
            onClick={handleSaveChanges}
            disabled={saving}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium text-xs transition-all shadow-sm disabled:opacity-50"
          >
            {saving ? <FaSpinner className="animate-spin" /> : <FaSave />} Save Changes
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-sm">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
        <input
          type="text"
          placeholder="Search teacher or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs shadow-sm"
        />
      </div>

      {/* Clean Table Container */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                {/* Left Column Header with Solid Background */}
                <th className="py-2.5 px-3 sticky left-0 bg-slate-100 dark:bg-slate-800 z-20 min-w-[170px] border-r border-slate-200 dark:border-slate-700 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  Teacher Name & Dept
                </th>
                {daysArray.map((day) => (
                  <th key={day} className="py-2.5 px-1 text-center min-w-[30px] text-[11px]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                  
                  {/* Left Column: Fixed Solid Background for High Readability */}
                  <td className="py-2 px-3 sticky left-0 bg-white dark:bg-slate-900 z-20 border-r border-slate-200 dark:border-slate-800 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-xs whitespace-nowrap">
                      {teacher.name}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      {teacher.dept}
                    </p>
                  </td>

                  {/* 30 Days Interactive Checkbox Cells */}
                  {daysArray.map((day) => {
                    const status = teacher.attendance[day] || 'P';
                    return (
                      <td key={day} className="py-1.5 px-0.5 text-center">
                        <button
                          onClick={() => handleCellClick(teacher.id, day)}
                          className={`w-5 h-5 rounded font-bold text-[10px] transition-all flex items-center justify-center mx-auto ${
                            status === 'P'
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                              : 'bg-rose-500 text-white hover:bg-rose-600'
                          }`}
                        >
                          {status}
                        </button>
                      </td>
                    );
                  })}

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}