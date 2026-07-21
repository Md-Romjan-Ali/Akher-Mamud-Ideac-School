'use client';

import React, { useState } from 'react';
import {

    FaBook,
    FaCalendarDay,
    FaChalkboardTeacher,
    FaCheckCircle,
    FaClock,
    FaDoorOpen,
    FaPlayCircle
} from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

// Routine data for Sunday to Thursday
const routineData = {
    Sunday: [
        { time: '09:00 AM - 09:45 AM', className: 'Class 8 (Sec A)', subject: 'English Grammar', room: 'Room 101', status: 'Completed' },
        { time: '09:50 AM - 10:35 AM', className: 'Class 9 (Sec B)', subject: 'General Science', room: 'Lab 202', status: 'Live' },
        { time: '10:40 AM - 11:25 AM', className: 'Class 10 (Sec A)', subject: 'ICT / Web Dev', room: 'Computer Lab', status: 'Upcoming' },
        { time: '11:30 AM - 12:15 PM', className: 'Class 7 (Sec C)', subject: 'English First Paper', room: 'Room 204', status: 'Upcoming' },
    ],
    Monday: [
        { time: '09:00 AM - 09:45 AM', className: 'Class 10 (Sec B)', subject: 'ICT / Computer Science', room: 'Computer Lab', status: 'Upcoming' },
        { time: '09:50 AM - 10:35 AM', className: 'Class 8 (Sec A)', subject: 'English Composition', room: 'Room 101', status: 'Upcoming' },
        { time: '11:30 AM - 12:15 PM', className: 'Class 9 (Sec A)', subject: 'General Science', room: 'Lab 202', status: 'Upcoming' },
    ],
    Tuesday: [
        { time: '09:00 AM - 09:45 AM', className: 'Class 7 (Sec A)', subject: 'English Grammar', room: 'Room 103', status: 'Upcoming' },
        { time: '10:40 AM - 11:25 AM', className: 'Class 8 (Sec B)', subject: 'English Literature', room: 'Room 101', status: 'Upcoming' },
        { time: '12:20 PM - 01:05 PM', className: 'Class 10 (Sec A)', subject: 'ICT Practical Lab', room: 'Computer Lab', status: 'Upcoming' },
    ],
    Wednesday: [
        { time: '09:50 AM - 10:35 AM', className: 'Class 9 (Sec B)', subject: 'General Science', room: 'Lab 202', status: 'Upcoming' },
        { time: '10:40 AM - 11:25 AM', className: 'Class 10 (Sec A)', subject: 'ICT / Web Dev', room: 'Computer Lab', status: 'Upcoming' },
        { time: '11:30 AM - 12:15 PM', className: 'Class 8 (Sec A)', subject: 'English Grammar', room: 'Room 101', status: 'Upcoming' },
    ],
    Thursday: [
        { time: '09:00 AM - 09:45 AM', className: 'Class 8 (Sec B)', subject: 'English Literature', room: 'Room 101', status: 'Upcoming' },
        { time: '09:50 AM - 10:35 AM', className: 'Class 7 (Sec B)', subject: 'English Grammar', room: 'Room 104', status: 'Upcoming' },
        { time: '11:30 AM - 12:15 PM', className: 'Class 10 (Sec B)', subject: 'ICT Practical Lab', room: 'Computer Lab', status: 'Upcoming' },
    ],
};

export default function SchoolTeacherRoutine() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const [selectedDay, setSelectedDay] = useState('Sunday');

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Live':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 animate-pulse">
                        <FaPlayCircle className="text-emerald-500" /> Current Class
                    </span>
                );
            case 'Completed':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700">
                        <FaCheckCircle className="text-gray-400" /> Done
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        <FaClock className="text-blue-500" /> Scheduled
                    </span>
                );
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8 font-sans">
            {/* Teacher Header Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 md:p-8 mb-6 shadow-xl relative overflow-hidden">
                <div className="absolute right-4 bottom-0 opacity-10 text-white">
                    <FaChalkboardTeacher size={200} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs tracking-wider uppercase mb-1">
                            <FaUser size={16} /> School Academic Schedule
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                            Teacher`s Daily Class Routine
                        </h1>
                        <p className="text-slate-300 text-sm mt-1">
                            Displaying routine for direct classroom presentation
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-3">
                        <FaCalendarDay className="text-indigo-300 text-lg" />
                        <div>
                            <p className="text-[10px] text-slate-300 uppercase font-semibold">Active Day</p>
                            <p className="text-sm font-bold text-white">{selectedDay}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Day Selector Buttons (Sunday - Thursday) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 ${selectedDay === day
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                            }`}
                    >
                        {day}
                        {day === 'Sunday' && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Class Routine Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                                <th className="py-4 px-6">Time & Status</th>
                                <th className="py-4 px-6">Class / Section</th>
                                <th className="py-4 px-6">Subject</th>
                                <th className="py-4 px-6">Room No.</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                            {routineData[selectedDay]?.length > 0 ? (
                                routineData[selectedDay].map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/50 ${item.status === 'Live' ? 'bg-indigo-50/40 dark:bg-indigo-950/30' : ''
                                            }`}
                                    >
                                        {/* Time Slot */}
                                        <td className="py-5 px-6 whitespace-nowrap">
                                            <div className="flex flex-col gap-1.5">
                                                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
                                                    <FaClock className="text-indigo-500 text-xs" />
                                                    {item.time}
                                                </div>
                                                <div>{getStatusBadge(item.status)}</div>
                                            </div>
                                        </td>

                                        {/* Class Name */}
                                        <td className="py-5 px-6 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800/50 text-sm">
                                                <FaUser />
                                                {item.className}
                                            </span>
                                        </td>

                                        {/* Subject */}
                                        <td className="py-5 px-6">
                                            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-base">
                                                <FaBook className="text-slate-400 text-sm" />
                                                {item.subject}
                                            </div>
                                        </td>

                                        {/* Room */}
                                        <td className="py-5 px-6 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 text-sm">
                                                <FaDoorOpen className="text-indigo-500" />
                                                {item.room}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-10 text-slate-400">
                                        No classes scheduled for {selectedDay}.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <p>School Hours: 09:00 AM - 01:30 PM</p>
                    <p>Days: Sun – Thu</p>
                </div>
            </div>
        </div>
    );
}