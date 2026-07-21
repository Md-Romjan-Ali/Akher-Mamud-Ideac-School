"use client";

import React from "react";
import {
    FiArrowLeft,
    FiAward,
    FiTrendingUp,
    FiAlertCircle,
    FiMail,
    FiHash,
    FiCalendar,
    FiBookOpen,
    FiMessageSquare,
    FiActivity
} from "react-icons/fi";

// Demo target student data drawn from your Class 5 roster
const studentDetails = {
    id: "1",
    name: "Liam Johnson",
    email: "liam.j@school.com",
    class: "Class 5",
    roll: "01",
    type: "Good",
    phone: "+1 (555) 234-5678",
    admissionDate: "August 12, 2024",
    attendanceRate: "94.2%",
    gpa: "3.85",
    behaviorLog: "Excellent participation in team projects; shows strong leadership capabilities in mathematics modules.",
    recentGrades: [
        { subject: "Mathematics", grade: "A", date: "July 15, 2026" },
        { subject: "Science", grade: "A-", date: "July 12, 2026" },
        { subject: "English Literature", grade: "B+", date: "July 08, 2026" },
        { subject: "History", grade: "A", date: "June 28, 2026" }
    ]
};

export default function StudentDetailsPage() {

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6 my-6 font-sans antialiased text-slate-800">

            {/* 1. Navigation Header Row */}
            <div className="flex items-center justify-between mb-6">
                <button
                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition cursor-pointer group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" /> Back to Roster
                </button>

                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 rounded-md">
                    STUDENT_ID: #{studentDetails.id}
                </span>
            </div>

            {/* 2. Primary Profile Header Block */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    {/* Avatar Icon Wrapper */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl flex items-center justify-center shadow-inner shrink-0">
                        {studentDetails.name.split(" ").map(n => n[0]).join("")}
                    </div>

                    <div>
                        <div className="flex items-center gap-3 flex-wrap">
                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{studentDetails.name}</h1>
                            {/* Context Status Badge */}
                            {studentDetails.type === "Better" && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-50 text-green-700 border border-green-200">
                                    <FiAward className="w-3 h-3" /> Better
                                </span>
                            )}
                            {studentDetails.type === "Good" && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                    <FiTrendingUp className="w-3 h-3" /> Good
                                </span>
                            )}
                            {studentDetails.type === "Bad" && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-red-50 text-red-700 border border-red-200">
                                    <FiAlertCircle className="w-3 h-3" /> Focus
                                </span>
                            )}
                        </div>

                        <p className="text-sm text-slate-500 mt-1 flex items-center gap-3 flex-wrap">
                            <span className="flex items-center gap-1"><FiMail /> {studentDetails.email}</span>
                            <span className="hidden sm:inline text-slate-300">•</span>
                            <span className="flex items-center gap-1 font-medium text-slate-700">
                                <FiBookOpen className="text-blue-500" /> {studentDetails.class}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Global Action Trigger Buttons */}
                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <button
                        className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-4 py-2 rounded-xl transition shadow-sm cursor-pointer"
                    >
                        <FiMessageSquare size={13} /> Command
                    </button>
                    <button
                        className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs px-4 py-2 rounded-xl transition shadow-sm cursor-pointer"
                    >
                        <FiActivity size={13} /> Flag Profile
                    </button>
                </div>
            </div>

            {/* 3. Core Academic Information Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Left Column: Quick Profile Metrics */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Registration Data</h3>

                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500 flex items-center gap-1.5"><FiHash size={14} /> Roll Position</span>
                                <span className="font-mono font-bold text-slate-800">#{studentDetails.roll}</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500 flex items-center gap-1.5"><FiActivity size={14} /> Attendance Rate</span>
                                <span className="font-semibold text-emerald-600">{studentDetails.attendanceRate}</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500 flex items-center gap-1.5"><FiAward size={14} /> Current GPA</span>
                                <span className="font-bold text-indigo-600">{studentDetails.gpa}</span>
                            </li>
                            <li className="flex items-center justify-between pt-1">
                                <span className="text-slate-500 flex items-center gap-1.5"><FiCalendar size={14} /> Joined School</span>
                                <span className="text-slate-700 font-medium text-xs">{studentDetails.admissionDate}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Dynamic Timeline Performance logs */}
                <div className="md:col-span-2 flex flex-col gap-6">

                    {/* Performance Remarks Block */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Instructor Behavioral Assessment</h3>
                        <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
                            {studentDetails.behaviorLog}
                        </p>
                    </div>

                    {/* Academic Evaluation Record Log (Recent Grades) */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Recent Examination Reports</h3>

                        <div className="overflow-hidden border border-slate-100 rounded-xl">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-slate-50/70 text-slate-500 font-semibold border-b border-slate-100">
                                        <th className="p-3">Subject Module</th>
                                        <th className="p-3 text-center">Score</th>
                                        <th className="p-3 text-right">Evaluation Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {studentDetails.recentGrades.map((report, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                                            <td className="p-3 font-semibold text-slate-800">{report.subject}</td>
                                            <td className="p-3 text-center">
                                                <span className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-bold text-xs">
                                                    {report.grade}
                                                </span>
                                            </td>
                                            <td className="p-3 text-right text-xs text-slate-400 font-mono">{report.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}