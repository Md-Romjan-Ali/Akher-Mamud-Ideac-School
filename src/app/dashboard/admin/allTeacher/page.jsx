import Image from 'next/image';
import React from 'react';
import {
    FaChalkboardTeacher,
    FaSearch,
    FaTrashAlt,
    FaEdit,
    FaGraduationCap
} from 'react-icons/fa';

export default function TeacherTableFrontend() {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans space-y-6">

            {/* Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                        <FaChalkboardTeacher className="text-indigo-600" /> Teacher Directory
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Manage faculty profiles, academic qualifications, and teacher accounts.
                    </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 px-4 py-2 rounded-xl text-xs font-semibold text-indigo-700 dark:text-indigo-400 self-start md:self-auto">
                    Total Faculty: <span className="font-bold text-sm">3</span>
                </div>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                    type="text"
                    placeholder="Search teacher by name or education..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm shadow-sm"
                />
            </div>

            {/* Teacher Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">

                        {/* Table Header */}
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                                <th className="py-4 px-6">Image</th>
                                <th className="py-4 px-6">Teacher Name</th>
                                <th className="py-4 px-6">Education / Qualification</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200 text-sm">

                            {/* Row 1 */}
                            <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="py-4 px-6">
                                    <Image
                                        width={150}
                                        height={150}
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                                        alt="Prof. Sarah Jenkins"
                                        className="w-11 h-11 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900 shadow-sm"
                                    />
                                </td>
                                <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                    <div>
                                        <p className="text-base font-bold">Prof. Sarah Jenkins</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">Department of English</p>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        <FaGraduationCap className="text-indigo-500 text-sm" />
                                        M.A. in English Literature (Oxford University)
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 rounded-lg text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all" title="Update">
                                            <FaEdit className="text-base" />
                                        </button>
                                        <button className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all" title="Delete">
                                            <FaTrashAlt className="text-base" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="py-4 px-6">
                                    <Image
                                        width={150}
                                        height={150}
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                                        alt="Dr. Robert Chen"
                                        className="w-11 h-11 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900 shadow-sm"
                                    />
                                </td>
                                <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                    <div>
                                        <p className="text-base font-bold">Dr. Robert Chen</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">Department of Computer Science</p>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        <FaGraduationCap className="text-indigo-500 text-sm" />
                                        Ph.D. in Computer Engineering (MIT)
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 rounded-lg text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all" title="Update">
                                            <FaEdit className="text-base" />
                                        </button>
                                        <button className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all" title="Delete">
                                            <FaTrashAlt className="text-base" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="py-4 px-6">
                                    <Image
                                        width={150}
                                        height={150}
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                                        alt="Maria Garcia"
                                        className="w-11 h-11 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900 shadow-sm"
                                    />
                                </td>
                                <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                    <div>
                                        <p className="text-base font-bold">Maria Garcia</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">Department of Mathematics</p>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        <FaGraduationCap className="text-indigo-500 text-sm" />
                                        M.Sc. in Applied Mathematics (Stanford)
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 rounded-lg text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all" title="Update">
                                            <FaEdit className="text-base" />
                                        </button>
                                        <button className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all" title="Delete">
                                            <FaTrashAlt className="text-base" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <p>Role: Teacher / Faculty</p>
                    <p>Showing 3 records</p>
                </div>
            </div>
        </div>
    );
}