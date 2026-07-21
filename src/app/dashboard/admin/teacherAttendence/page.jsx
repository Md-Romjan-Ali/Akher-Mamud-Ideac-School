'use client';

import React, { useState } from 'react';
import {
    FaUserCheck,
    FaSearch,
    FaCalendarAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaMinusCircle
} from 'react-icons/fa';

// Generate 20 Teachers with mock monthly attendance data (30 days)
const generateInitialTeachers = () => {
    const teacherList = [
        { id: 'T-101', name: 'Md. Ramzan Ali', dept: 'ICT & Web Dev' },
        { id: 'T-102', name: 'Sarah Jenkins', dept: 'English Literature' },
        { id: 'T-103', name: 'Dr. Robert Chen', dept: 'General Science' },
        { id: 'T-104', name: 'Maria Garcia', dept: 'Mathematics' },
        { id: 'T-105', name: 'David Wilson', dept: 'Physics' },
        { id: 'T-106', name: 'Anisur Rahman', dept: 'Chemistry' },
        { id: 'T-107', name: 'Fatima Zahra', dept: 'Biology' },
        { id: 'T-108', name: 'John Doe', dept: 'Physical Education' },
        { id: 'T-109', name: 'Emily Watson', dept: 'History' },
        { id: 'T-110', name: 'Michael Brown', dept: 'Geography' },
        { id: 'T-111', name: 'Nusrat Jahan', dept: 'Bangla' },
        { id: 'T-112', name: 'Kamal Hossain', dept: 'Economics' },
        { id: 'T-113', name: 'Sophia Taylor', dept: 'Accounting' },
        { id: 'T-114', name: 'James Anderson', dept: 'Business Studies' },
        { id: 'T-115', name: 'Tanvir Ahmed', dept: 'ICT Lab' },
        { id: 'T-116', name: 'Rachel Green', dept: 'English Grammar' },
        { id: 'T-117', name: 'Kazi Nazrul', dept: 'Arts & Craft' },
        { id: 'T-118', name: 'Laura Miller', dept: 'Social Science' },
        { id: 'T-119', name: 'Shahidul Islam', dept: 'Higher Math' },
        { id: 'T-120', name: 'Grace Lee', dept: 'Statistics' },
    ];

    // Map 30 days status: 'P' = Present, 'A' = Absent, 'L' = Leave
    return teacherList.map((t) => {
        const days = {};
        for (let d = 1; d <= 30; d++) {
            // Fridays & Saturdays off by default (assuming day 6, 7, 13, 14... off)
            if (d % 7 === 6 || d % 7 === 0) {
                days[d] = 'OFF';
            } else {
                // High probability of 'P', small chance of 'A' or 'L'
                const rand = Math.random();
                days[d] = rand > 0.15 ? 'P' : rand > 0.05 ? 'L' : 'A';
            }
        }
        return { ...t, attendance: days };
    });
};

export default function TeacherAttendanceGrid() {
    const [teachers, setTeachers] = useState(generateInitialTeachers());
    const [search, setSearch] = useState('');
    const daysArray = Array.from({ length: 30 }, (_, i) => i + 1);

    // Toggle status on cell click: P -> A -> L -> P
    const handleCellClick = (teacherId, day) => {
        setTeachers((prev) =>
            prev.map((t) => {
                if (t.id === teacherId) {
                    const currentStatus = t.attendance[day];
                    if (currentStatus === 'OFF') return t; // Skip weekends

                    const nextStatus = currentStatus === 'P' ? 'A' : currentStatus === 'A' ? 'L' : 'P';
                    return {
                        ...t,
                        attendance: { ...t.attendance, [day]: nextStatus },
                    };
                }
                return t;
            })
        );
    };

    const filteredTeachers = teachers.filter(
        (t) =>
            t.name.toLowerCase().includes(search.toLowerCase()) ||
            t.dept.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-[1400px] mx-auto p-4 md:p-6 font-sans space-y-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <FaUserCheck className="text-indigo-600" /> Monthly Teacher Attendance Sheet
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        20 Teacher records for 30 Days. Click on any box to cycle status: <span className="text-emerald-600 font-bold">P (Present)</span> → <span className="text-rose-600 font-bold">A (Absent)</span> → <span className="text-amber-600 font-bold">L (Leave)</span>.
                    </p>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-3 text-xs font-semibold bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="flex items-center gap-1 text-emerald-600"><FaCheckCircle /> P</span>
                    <span className="flex items-center gap-1 text-rose-600"><FaTimesCircle /> A</span>
                    <span className="flex items-center gap-1 text-amber-600"><FaMinusCircle /> L</span>
                    <span className="text-slate-400">|</span>
                    <span className="text-slate-400">OFF (Weekend)</span>
                </div>
            </div>

            {/* Filter / Search Bar */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search by teacher name or department..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm shadow-sm"
                />
            </div>

            {/* Grid Container */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">

                        {/* Table Header */}
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                                <th className="py-3 px-4 sticky left-0 bg-slate-100 dark:bg-slate-800 z-10 min-w-[180px] shadow-[2px_0_5px_rgba(0,0,0,0.05)]">
                                    Teacher Info
                                </th>
                                {daysArray.map((day) => (
                                    <th key={day} className="py-3 px-1.5 text-center min-w-[32px]">
                                        {day}
                                    </th>
                                ))}
                                <th className="py-3 px-3 text-center min-w-[70px] bg-slate-100 dark:bg-slate-800 sticky right-0 z-10 shadow-[-2px_0_5px_rgba(0,0,0,0.05)]">
                                    Total
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {filteredTeachers.map((teacher) => {
                                // Calculate Totals
                                const totalP = Object.values(teacher.attendance).filter((s) => s === 'P').length;
                                const totalA = Object.values(teacher.attendance).filter((s) => s === 'A').length;
                                const totalL = Object.values(teacher.attendance).filter((s) => s === 'L').length;

                                return (
                                    <tr key={teacher.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">

                                        {/* Fixed Left Column: Teacher Info */}
                                        <td className="py-3 px-4 sticky left-0 bg-white dark:bg-slate-900 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]">
                                            <p className="font-bold text-slate-900 dark:text-slate-100 text-sm whitespace-nowrap">
                                                {teacher.name}
                                            </p>
                                            <p className="text-[11px] text-slate-400 font-medium">
                                                {teacher.dept}
                                            </p>
                                        </td>

                                        {/* 30 Day Checkboxes */}
                                        {daysArray.map((day) => {
                                            const status = teacher.attendance[day];
                                            return (
                                                <td key={day} className="py-2 px-0.5 text-center">
                                                    <button
                                                        onClick={() => handleCellClick(teacher.id, day)}
                                                        disabled={status === 'OFF'}
                                                        className={`w-7 h-7 rounded-md font-bold text-[11px] transition-all flex items-center justify-center mx-auto ${status === 'P'
                                                                ? 'bg-emerald-500 text-white shadow-sm hover:bg-emerald-600'
                                                                : status === 'A'
                                                                    ? 'bg-rose-500 text-white shadow-sm hover:bg-rose-600'
                                                                    : status === 'L'
                                                                        ? 'bg-amber-500 text-white shadow-sm hover:bg-amber-600'
                                                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed opacity-40'
                                                            }`}
                                                    >
                                                        {status === 'OFF' ? '-' : status}
                                                    </button>
                                                </td>
                                            );
                                        })}

                                        {/* Fixed Right Column: Summary Count */}
                                        <td className="py-3 px-3 text-center sticky right-0 bg-white dark:bg-slate-900 z-10 shadow-[-2px_0_5px_rgba(0,0,0,0.05)]">
                                            <div className="flex flex-col items-center justify-center gap-0.5 font-bold">
                                                <span className="text-emerald-600">{totalP}P</span>
                                                <div className="flex gap-1 text-[10px] text-slate-400 font-medium">
                                                    <span className="text-rose-500">{totalA}A</span>
                                                    <span>/</span>
                                                    <span className="text-amber-500">{totalL}L</span>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Footer info */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p>Showing 20 Teachers • Interactive Attendance Sheet</p>
                    <p>Columns 1-30 representing days of the month</p>
                </div>
            </div>
        </div>
    );
}