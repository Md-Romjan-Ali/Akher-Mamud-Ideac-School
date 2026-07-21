"use client";

import React, { useState } from "react";
import {
    FiCheck,
    FiChevronLeft,
    FiChevronRight,
    FiUserCheck,
    FiUsers,
    FiSave
} from "react-icons/fi";

// 1. Hardcoded 10 students all belonging to "Class 5"
const classFiveStudents = [
    { id: "1", name: "Liam Johnson", roll: "01", email: "liam.j@school.com" },
    { id: "2", name: "Emma Smith", roll: "02", email: "emma.s@school.com" },
    { id: "3", name: "Noah Davis", roll: "03", email: "noah.d@school.com" },
    { id: "4", name: "Olivia Brown", roll: "04", email: "olivia.b@school.com" },
    { id: "5", name: "Ava Wilson", roll: "05", email: "ava.w@school.com" },
    { id: "6", name: "Elijah Jones", roll: "06", email: "elijah.j@school.com" },
    { id: "7", name: "Sophia Garcia", roll: "07", email: "sophia.g@school.com" },
    { id: "8", name: "James Miller", roll: "08", email: "james.m@school.com" },
    { id: "9", name: "Isabella Martinez", roll: "09", email: "isabella.m@school.com" },
    { id: "10", name: "Benjamin Anderson", roll: "10", email: "ben.a@school.com" },
    { id: "11", name: "Benjamin Anderson", roll: "10", email: "ben.a@school.com" },
];

export default function MonthlyAttendance() {
    // Configurable targets
    const targetClass = "Class 5";
    const currentMonthName = "October 2026";
    const daysInMonth = 31; // You can change this to 28, 30, or 31 depending on the month

    // Create an array of days [1, 2, 3... 31] to map out our horizontal columns
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // 2. State to store dynamic matrix attendance
    // Key structure: "studentId-day" -> true (Present) or false/undefined (Absent)
    const [attendanceMatrix, setAttendanceMatrix] = useState({});

    // Toggle cell value handler
    const toggleCell = (studentId, day) => {
        const key = `${studentId}-${day}`;
        setAttendanceMatrix((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Helper calculation metrics
    const totalStudents = classFiveStudents.length;

    // Count total checkmarks placed across the entire month grid
    const totalPresentTicksCount = Object.values(attendanceMatrix).filter(Boolean).length;

    return (
        <div className="w-full max-w-7xl mx-auto p-6 my-6 font-sans">

            {/* Top Header Management Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-md uppercase tracking-wider">
                            Active Tier
                        </span>
                        <h1 className="text-2xl font-bold text-slate-800">{targetClass} Roster</h1>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                        Click any cell square matrix to switch records between Absent (White) and Present (Green).
                    </p>
                </div>

                {/* Month Selector Toggle Row */}
                <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                    <button type="button" className="p-2 hover:bg-white rounded-lg text-slate-600 transition shadow-sm cursor-pointer">
                        <FiChevronLeft size={16} />
                    </button>
                    <span className="text-sm font-semibold text-slate-700 min-w-[110px] text-center">
                        {currentMonthName}
                    </span>
                    <button type="button" className="p-2 hover:bg-white rounded-lg text-slate-600 transition shadow-sm cursor-pointer">
                        <FiChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Mini Performance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <FiUsers size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Class Size</p>
                        <h3 className="text-xl font-bold text-slate-800">{totalStudents} Active Students</h3>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                        <FiUserCheck size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Total Monthly Ticks logged</p>
                        <h3 className="text-xl font-bold text-emerald-600">{totalPresentTicksCount} Total Attendances</h3>
                    </div>
                </div>
            </div>

            {/* Main Matrix Table Grid Container (Scrollable Horizontal View) */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto max-w-full">
                    <table className="w-full text-left border-collapse table-fixed min-w-[1200px]">
                        <thead>
                            {/* Table Column Structural Definition Width Headers */}
                            <tr className="bg-slate-50 text-slate-600 text-xs font-bold uppercase border-b border-slate-200">
                                <th className="py-3 px-4 w-[260px] sticky left-0 bg-slate-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                    Student Name
                                </th>
                                <th className="py-3 px-2 text-center w-[60px]">Roll</th>
                                {/* Dynamically build calendar days heads */}
                                {daysArray.map((day) => (
                                    <th key={day} className="py-3 text-center border-l border-slate-200/60 w-[42px] font-mono font-medium">
                                        {day < 10 ? `0${day}` : day}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="text-sm divide-y divide-slate-100">
                            {classFiveStudents.map((student) => {
                                const initials = student.name.split(" ").map(n => n[0]).join("");

                                return (
                                    <tr key={student.id} className="hover:bg-slate-50/40 transition-colors">

                                        {/* Sticky Left Name column to let teachers scroll columns without losing track of names */}
                                        <td className="py-2.5 px-4 sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-slate-400 to-slate-500 text-white font-semibold text-xs shrink-0">
                                                    {initials}
                                                </div>
                                                <div className="truncate">
                                                    <div className="font-semibold text-slate-800 leading-tight">{student.name}</div>
                                                    <div className="text-[11px] text-slate-400 truncate">{student.email}</div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Roll column */}
                                        <td className="py-2.5 px-2 text-center font-mono font-bold text-slate-500">
                                            #{student.roll}
                                        </td>

                                        {/* Interactive Days Row mapping */}
                                        {daysArray.map((day) => {
                                            const matrixKey = `${student.id}-${day}`;
                                            const isPresent = !!attendanceMatrix[matrixKey];

                                            return (
                                                <td key={day} className="p-1 border-l border-slate-100 text-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleCell(student.id, day)}
                                                        aria-label={`Day ${day} status for ${student.name}`}
                                                        className={`
                              w-8 h-8 mx-auto rounded-lg flex items-center justify-center transition-all duration-150 cursor-pointer text-transparent outline-none border
                              ${isPresent
                                                                ? "bg-emerald-500 border-emerald-600 text-white scale-105 shadow-sm"
                                                                : "bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50"
                                                            }
                            `}
                                                    >
                                                        <FiCheck size={14} className={`stroke-[3.5] ${isPresent ? "opacity-100" : "opacity-0"}`} />
                                                    </button>
                                                </td>
                                            );
                                        })}

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sticky Save / Submit Bar Footer layout */}
            <div className="flex justify-end mt-5">
                <button
                    type="button"
                    onClick={() => alert(`Saved successfully! Matrix configuration logged ${totalPresentTicksCount} items.`)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md px-6 py-2.5 rounded-xl transition duration-150 cursor-pointer"
                >
                    <FiSave size={16} />
                    Save Month Record
                </button>
            </div>

        </div>
    );
}