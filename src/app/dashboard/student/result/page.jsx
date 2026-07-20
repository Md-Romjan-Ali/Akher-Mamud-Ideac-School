"use client";

import React from "react";
import { FiAward, FiBook, FiCheckCircle, FiDownload } from "react-icons/fi";
import Button from "@/components/ui/Button";

export default function ResultTableSection() {
    // ৮টি সাবজেক্টের ডেমো রেজাল্ট ডাটা
    const resultData = [
        { id: 1, code: "101", subject: "Bangla", marks: 82, grade: "A+", point: 5.00, status: "Passed" },
        { id: 2, code: "107", subject: "English", marks: 75, grade: "A", point: 4.00, status: "Passed" },
        { id: 3, code: "109", subject: "Mathematics", marks: 91, grade: "A+", point: 5.00, status: "Passed" },
        { id: 4, code: "111", subject: "Islam & Moral Education", marks: 88, grade: "A+", point: 5.00, status: "Passed" },
        { id: 5, code: "136", subject: "Physics", marks: 78, grade: "A", point: 4.00, status: "Passed" },
        { id: 6, code: "137", subject: "Chemistry", marks: 84, grade: "A+", point: 5.00, status: "Passed" },
        { id: 7, code: "138", subject: "Biology", marks: 80, grade: "A+", point: 5.00, status: "Passed" },
        { id: 8, code: "154", subject: "Information & Communication Tech (ICT)", marks: 46, grade: "A+", point: 5.00, status: "Passed" },
    ];

    // টোটাল জিপিএ ক্যালকুলেশন (নরমাল অ্যাভারেজ ডেমো)
    const totalGPA = (resultData.reduce((acc, curr) => acc + curr.point, 0) / resultData.length).toFixed(2);

    return (
        <section className="py-12 px-4 md:px-8 bg-white w-full">
            <div className="max-w-4xl mx-auto">

                {/* Result Card Wrapper */}
                <div className="border border-slate-100 rounded-2xl shadow-sm overflow-hidden bg-white">

                    {/* Header Controls */}
                    <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
                        <div>
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-2">
                                <FiBook />
                                <span>Academic Performance</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                                Semester Examination Transcript
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5">
                                Official mark sheets and grade distribution across 8 subjects.
                            </p>
                        </div>

                        {/* Download Marksheet Action */}
                        <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 px-4 py-2.5 shadow-sm transition-all self-start sm:self-center">
                            <FiDownload />
                            <span>Download PDF</span>
                        </Button>
                    </div>

                    {/* Desktop Responsive HTML Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-100">
                                    <th className="py-4 px-6">Code</th>
                                    <th className="py-4 px-6">Subject Name</th>
                                    <th className="py-4 px-6 text-center">Obtained Marks</th>
                                    <th className="py-4 px-6 text-center">Letter Grade</th>
                                    <th className="py-4 px-6 text-center">Grade Point</th>
                                    <th className="py-4 px-6 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 text-sm font-medium text-slate-600">
                                {resultData.map((row) => (
                                    <tr key={row.id} className="hover:bg-slate-50/40 transition-colors">
                                        <td className="py-3.5 px-6 font-mono text-xs text-slate-400">{row.code}</td>
                                        <td className="py-3.5 px-6 font-bold text-slate-800">{row.subject}</td>
                                        <td className="py-3.5 px-6 text-center font-semibold">{row.marks}</td>
                                        <td className="py-3.5 px-6 text-center">
                                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${row.grade === "A+" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                                                }`}>
                                                {row.grade}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-6 text-center font-mono font-bold text-slate-700">{row.point.toFixed(2)}</td>
                                        <td className="py-3.5 px-6 text-center">
                                            <span className="inline-flex items-center gap-1 text-xs text-emerald-500 font-bold">
                                                <FiCheckCircle className="text-sm" />
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Summary Calculation Footer Panel */}
                    <div className="p-6 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                            <span>Total Subjects Evaluated: <strong className="text-slate-700">{resultData.length}</strong></span>
                        </div>

                        {/* Final CGPA Badge */}
                        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl px-5 py-2.5 text-white shadow-md shadow-blue-600/10">
                            <FiAward className="text-xl" />
                            <div>
                                <span className="block text-[9px] font-bold uppercase tracking-wider text-blue-100">Final CGPA</span>
                                <span className="text-base font-extrabold tracking-tight">{totalGPA} / 5.00</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}