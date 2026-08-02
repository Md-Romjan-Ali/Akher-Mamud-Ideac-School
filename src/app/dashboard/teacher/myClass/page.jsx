"use client";

import React, { useState } from "react";
import {
    FiCalendar,
    FiClock,
    FiBookOpen,
    FiUser,
    FiCheckCircle,
    FiAward,
    FiGrid
} from "react-icons/fi";

// Sample dataset based on your MongoDB document structure
const scheduleData = [
    {
        _id: "6a6efe3ce78140b7047739a7",
        teacherEmail: "teacher@gmail.com",
        className: "Class 10",
        subject: "Mathematics",
        day: "Sunday",
        startTime: "09:00",
        endTime: "09:45",
    },
    {
        _id: "6a6efe3ce78140b7047739a8",
        teacherEmail: "teacher@gmail.com",
        className: "Class 9",
        subject: "Higher Math",
        day: "Sunday",
        startTime: "10:00",
        endTime: "10:45",
    },
    {
        _id: "6a6efe3ce78140b7047739a9",
        teacherEmail: "teacher@gmail.com",
        className: "Class 10",
        subject: "Physics",
        day: "Monday",
        startTime: "11:00",
        endTime: "11:45",
    },
];

const daysOfWeek = ["Saterday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

export default function TeacherClassSchedule() {
    const [selectedDay, setSelectedDay] = useState("Sunday");

    // Filter schedule by selected day
    const dailyClasses = scheduleData.filter((item) => item.day === selectedDay);

    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 my-6 font-sans">

            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-md uppercase tracking-wider">
                            Teacher Routine
                        </span>
                        <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                            Weekly Class Schedule
                        </h1>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                        <FiUser size={14} className="text-blue-600" />
                        Logged in as: <span className="font-semibold text-slate-700">{scheduleData[0].teacherEmail}</span>
                    </p>
                </div>

                {/* Day Selector Buttons */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl overflow-x-auto">
                    {daysOfWeek.map((day) => (
                        <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer shrink-0 ${selectedDay === day
                                    ? "bg-white text-blue-600 shadow-xs font-bold"
                                    : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            {/* Overview Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-xs">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <FiCalendar size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Active Day</p>
                        <h3 className="text-base sm:text-lg font-bold text-slate-800">{selectedDay}</h3>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-xs">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                        <FiBookOpen size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Classes Today</p>
                        <h3 className="text-base sm:text-lg font-bold text-emerald-600">
                            {dailyClasses.length} {dailyClasses.length === 1 ? "Session" : "Sessions"}
                        </h3>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-xs">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                        <FiAward size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Total Weekly Classes</p>
                        <h3 className="text-base sm:text-lg font-bold text-purple-600">
                            {scheduleData.length} Classes
                        </h3>
                    </div>
                </div>
            </div>

            {/* Schedule Content */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                    <h2 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
                        <FiGrid className="text-blue-600" />
                        Classes for {selectedDay}
                    </h2>
                    <span className="text-xs text-slate-400 font-medium">
                        Time Format: 24-Hour
                    </span>
                </div>

                {dailyClasses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dailyClasses.map((item) => (
                            <div
                                key={item._id}
                                className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all group"
                            >
                                {/* Card Header: Subject & Class */}
                                <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="p-2 bg-blue-100 text-blue-700 rounded-xl font-bold text-xs">
                                            {item.className.includes("Class") ? item.className : `Class ${item.className}`}
                                        </span>
                                        <h3 className="font-bold text-slate-800 text-base sm:text-lg">
                                            {item.subject}
                                        </h3>
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">
                                        #{item._id.slice(-6)}
                                    </span>
                                </div>

                                {/* Class Details */}
                                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                                        <FiClock className="text-blue-600 shrink-0" size={16} />
                                        <span>Time: {item.startTime} - {item.endTime}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-500">
                                        <FiUser className="text-slate-400 shrink-0" size={16} />
                                        <span>Instructor: {item.teacherEmail}</span>
                                    </div>
                                </div>

                                {/* Footer Action Tag */}
                                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                        <FiCheckCircle size={12} /> Scheduled
                                    </span>
                                    <span className="text-slate-400 text-[11px]">
                                        45 Mins Duration
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State if no classes scheduled for the selected day */
                    <div className="text-center py-10">
                        <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FiCalendar size={20} />
                        </div>
                        <h4 className="font-semibold text-slate-700 text-sm">No Classes Scheduled</h4>
                        <p className="text-xs text-slate-400 mt-1">There are no classes assigned for {selectedDay}.</p>
                    </div>
                )}
            </div>

        </div>
    );
}