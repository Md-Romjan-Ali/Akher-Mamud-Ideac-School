"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleDown, FaSearch, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function StudentTableTeacher({ initialStudents }) {
    const [students] = useState(initialStudents);
    const [selectedClass, setSelectedClass] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter logic for Class Tab & Search Input
    const filteredStudents = students.filter((student) => {
        const matchesClass = selectedClass === "All" || student.className === selectedClass;
        const matchesSearch =
            student.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.phoneNumber.includes(searchQuery);

        return matchesClass && matchesSearch;
    });

    const classList = ["All", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans space-y-6">

            {/* Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                        <FaUser className="text-emerald-600" /> Student Directory
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Manage student records and account details.
                    </p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-400 self-start md:self-auto">
                    Total Students: <span className="font-bold text-sm">{filteredStudents.length}</span>
                </div>
            </div>

            {/* Controls: Search and Class Filter Tabs */}
            <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative max-w-md">
                    <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name, email, or phone..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm"
                    />
                </div>

                {/* Class Filter Tabs (1-10) */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
                    <span className="text-xs font-bold text-slate-400 uppercase mr-2">Class:</span>
                    {classList.map((cls) => (
                        <button
                            key={cls}
                            onClick={() => setSelectedClass(cls)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${selectedClass === cls
                                ? "bg-emerald-600 text-white shadow-sm"
                                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                                }`}
                        >
                            {cls === "All" ? "All Classes" : `Class ${cls}`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Student Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">

                        {/* Table Header */}
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                                <th className="py-4 px-6">Student</th>
                                <th className="py-4 px-6">Class</th>
                                <th className="py-4 px-6">Email</th>
                                <th className="py-4 px-6">Phone</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200 text-sm">
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
                                    <tr key={student._id || student.email} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">

                                        {/* Name & Photo */}
                                        <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-100 dark:border-emerald-900 shrink-0">
                                                    {student.photoUrl ? (
                                                        <Image
                                                            src={student.photoUrl}
                                                            alt={student.studentName}
                                                            fill
                                                            className="object-cover"
                                                            sizes="40px"
                                                        />
                                                    ) : (
                                                        student.studentName.charAt(0)
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="leading-tight">{student.studentName}</p>
                                                    <p className="text-xs font-normal text-slate-400 dark:text-slate-500">{student.address}</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Class Name */}
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/50">
                                                Class {student.className}
                                            </span>
                                        </td>

                                        {/* Email */}
                                        <td className="py-4 px-6 text-slate-600 dark:text-slate-400 font-mono text-xs">
                                            {student.email}
                                        </td>

                                        {/* Phone Number */}
                                        <td className="py-4 px-6 text-slate-600 dark:text-slate-400 font-mono text-xs">
                                            {student.phoneNumber}
                                        </td>

                                        {/* Action Buttons */}
                                        <td className="py-4 px-6 text-center text-lg flex items-center">
                                            <FaArrowAltCircleDown />
                                            <Link href={`/dashboard/teacher/allStudent/${student._id}`}>
                                                View Details
                                            </Link>

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-8 text-center text-slate-400 text-sm">
                                        No students found matching the selected criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <p>Filter: {selectedClass === "All" ? "All Classes" : `Class ${selectedClass}`}</p>
                    <p>Showing {filteredStudents.length} records</p>
                </div>
            </div>
        </div>
    );
}