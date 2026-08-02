'use client';

import { teacherRoutinePost } from '@/lib/post';
import React, { useState } from 'react';
import {
    FaChalkboardTeacher,
    FaGraduationCap,
    FaBook,
    FaCalendarDay,
    FaClock,
    FaPaperPlane,

} from 'react-icons/fa';

export default function AddRoutineForm() {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const routinePayload = Object.fromEntries(formData.entries());
        const result = await teacherRoutinePost(routinePayload);
        console.log('Routine Post Result:', result);
        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 md:p-8 font-sans space-y-6">

            {/* Form Container */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">

                {/* Card Header */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-6 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                        <FaClock className="text-blue-600 dark:text-blue-500" /> Assign Class Schedule
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Create a time slot routine for teachers and classes.
                    </p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">

                    {/* 1. Teacher Email */}
                    <div className="space-y-1.5">
                        <label htmlFor="teacherEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            Teacher Email
                        </label>
                        <div className="relative">
                            <FaChalkboardTeacher className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                            <input
                                type="email"
                                id="teacherEmail"
                                name="teacherEmail"
                                defaultValue="teacher@gmail.com"
                                required
                                placeholder="teacher@example.com"
                                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            />
                        </div>
                    </div>

                    {/* 2. Class & Subject Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Class Name */}
                        <div className="space-y-1.5">
                            <label htmlFor="className" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                Class Name / Grade
                            </label>
                            <div className="relative">
                                <FaGraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                <input
                                    type="text"
                                    id="className"
                                    name="className"
                                    defaultValue="10"
                                    required
                                    placeholder="e.g. 10"
                                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                Subject
                            </label>
                            <div className="relative">
                                <FaBook className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    defaultValue="Mathematics"
                                    required
                                    placeholder="e.g. Mathematics"
                                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                                />
                            </div>
                        </div>

                    </div>

                    {/* 3. Day Picker */}
                    <div className="space-y-1.5">
                        <label htmlFor="day" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            Day
                        </label>
                        <div className="relative">
                            <FaCalendarDay className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                            <select
                                id="day"
                                name="day"
                                defaultValue="Sunday"
                                required
                                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm appearance-none"
                            >
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                            </select>
                        </div>
                    </div>

                    {/* 4. Start Time & End Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Start Time */}
                        <div className="space-y-1.5">
                            <label htmlFor="startTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                Start Time
                            </label>
                            <input
                                type="time"
                                id="startTime"
                                name="startTime"
                                defaultValue="09:00"
                                required
                                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            />
                        </div>

                        {/* End Time */}
                        <div className="space-y-1.5">
                            <label htmlFor="endTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                End Time
                            </label>
                            <input
                                type="time"
                                id="endTime"
                                name="endTime"
                                defaultValue="09:45"
                                required
                                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            />
                        </div>

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 mt-2"
                    >
                        {
                            loading ? 'loading...':
                            <>
                                <FaPaperPlane className="text-xs" /> Save Routine Slot
                            </>
                        }
                     
                    </button>

                </form>
            </div>

        </div>
    );
}