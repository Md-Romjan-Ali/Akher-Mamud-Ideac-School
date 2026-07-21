"use client";

import Link from "next/link";
import React from "react";
import { FiAward, FiTrendingUp, FiAlertCircle, FiMessageSquare } from "react-icons/fi";

// 10 Students all in Class 5
const classFiveStudents = [
    { id: "1", name: "Liam Johnson", email: "liam.j@school.com", roll: "01", type: "Good" },
    { id: "2", name: "Emma Smith", email: "emma.s@school.com", roll: "02", type: "Better" },
    { id: "3", name: "Noah Davis", email: "noah.d@school.com", roll: "03", type: "Bad" },
    { id: "4", name: "Olivia Brown", email: "olivia.b@school.com", roll: "04", type: "Better" },
    { id: "5", name: "Ava Wilson", email: "ava.w@school.com", roll: "05", type: "Good" },
    { id: "6", name: "Elijah Jones", email: "elijah.j@school.com", roll: "06", type: "Better" },
    { id: "7", name: "Sophia Garcia", email: "sophia.g@school.com", roll: "07", type: "Bad" },
    { id: "8", name: "James Miller", email: "james.m@school.com", roll: "08", type: "Better" },
    { id: "9", name: "Isabella Martinez", email: "isabella.m@school.com", roll: "09", type: "Good" },
    { id: "10", name: "Benjamin Anderson", email: "ben.a@school.com", roll: "10", type: "Bad" },
];

export default function StudentTable() {

    // Action trigger when clicking the row button
    const handleActionClick = (studentName, roll) => {
        alert(`Action triggered for ${studentName} (Roll #${roll})`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white border border-slate-200 rounded-xl shadow-sm my-8 font-sans">

            {/* Simple Heading */}
            <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-800">Class 5 Student Roster</h2>
                <p className="text-sm text-slate-500">Quick action panel for individual student profiles.</p>
            </div>

            {/* Standard HTML Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-600 text-xl border-b border-slate-200">
                            <th className="p-3 font-semibold">Student</th>
                            <th className="p-3 font-semibold text-center">Roll No</th>
                            <th className="p-3 font-semibold text-center">Status</th>
                            <th className="p-3 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg divide-y divide-slate-100">
                        {classFiveStudents.map((student) => (
                            <tr key={student.id} className="hover:bg-slate-50/50">

                                {/* Student Info */}
                                <td className="p-3">
                                    <Link
                                        href={`/dashboard/teacher/allStudent/${student.roll}`}
                                    >
                                        <div className="font-medium text-slate-800">{student.name}</div>
                                        <div className="text-xs text-slate-400">{student.email}</div>
                                    </Link>

                                </td>

                                {/* Roll Number */}
                                <td className="p-3 text-center font-mono text-slate-600">
                                    #{student.roll}
                                </td>

                                {/* Type Badge */}
                                <td className="p-3 text-center">
                                    {student.type === "Better" && (
                                        <span className="px-2.5 py-0.5 text-lg rounded-full bg-green-100 text-green-800">Better</span>
                                    )}
                                    {student.type === "Good" && (
                                        <span className="px-2.5 py-0.5 text-lg rounded-full bg-blue-100 text-blue-800">Good</span>
                                    )}
                                    {student.type === "Bad" && (
                                        <span className="px-2.5 py-0.5 text-lg rounded-full bg-red-100 text-red-800">Focus</span>
                                    )}
                                </td>

                                {/* Simple Row Action Button */}
                                <td className="p-3 text-center">
                                    <button
                                        type="button"
                                        onClick={() => handleActionClick(student.name, student.roll)}
                                        className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-900 text-white text-xs px-3 py-1.5 rounded-md transition shadow-sm cursor-pointer"
                                    >
                                        <FiMessageSquare size={12} />
                                        Command
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}