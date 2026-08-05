
import { getStudentResult } from "@/lib/get";
import { userSession } from "@/lib/session";
import React from "react";
import {
    FiAward,
    FiBookOpen,
    FiCheckCircle,
    FiAlertCircle,
    FiUser
} from "react-icons/fi";

// Sample dataset array containing multiple subject entries
// const resultsData = [
//     {
//         _id: "6a6ff7a9d04fcc0748a29bbe",
//         subject: "Mathematics",
//         marks: "50",
//         email: "ayesha1@gmail.com",
//     },
//     {
//         _id: "6a6ff7a9d04fcc0748a29bbf",
//         subject: "English",
//         marks: "20",
//         email: "ayesha1@gmail.com",
//     },
//     {
//         _id: "6a6ff7a9d04fcc0748a29bc0",
//         subject: "Physics",
//         marks: "68",
//         email: "ayesha1@gmail.com",
//     },
//     {
//         _id: "6a6ff7a9d04fcc0748a29bc1",
//         subject: "Chemistry",
//         marks: "45",
//         email: "ayesha1@gmail.com",
//     },
// ];

// Helper function to calculate Letter Grade, GPA Points, and Badge Colors
const getGradeAndGPA = (marksNum) => {
    if (marksNum >= 80) return { grade: "A+", gpa: 5.0, color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (marksNum >= 70) return { grade: "A", gpa: 4.0, color: "text-blue-700 bg-blue-50 border-blue-200" };
    if (marksNum >= 60) return { grade: "A-", gpa: 3.5, color: "text-indigo-700 bg-indigo-50 border-indigo-200" };
    if (marksNum >= 50) return { grade: "B", gpa: 3.0, color: "text-amber-700 bg-amber-50 border-amber-200" };
    if (marksNum >= 40) return { grade: "C", gpa: 2.0, color: "text-orange-700 bg-orange-50 border-orange-200" };
    if (marksNum >= 33) return { grade: "D", gpa: 1.0, color: "text-rose-700 bg-rose-50 border-rose-200" };
    return { grade: "F", gpa: 0.0, color: "text-red-700 bg-red-50 border-red-200" };
};

export default async function StudentResultTable() {
    const user = await userSession()
    const studentEmail = user?.email
    const data = await getStudentResult(studentEmail) || [];
    console.log(data);

    // Calculate Overall GPA & Total Marks
    const totalObtainedMarks = data.reduce((sum, item) => sum + (Number(item.marks) || 0), 0);
    const totalFullMarks = data.length * 100;

    const gpaSum = data.reduce((sum, item) => sum + getGradeAndGPA(Number(item.marks)).gpa, 0);
    const averageGPA = data.length > 0 ? (gpaSum / data.length).toFixed(2) : "0.00";

    const hasFailed = data.some((item) => Number(item.marks) < 33);

    return (
        <div className="w-full max-w-5xl mx-auto my-6 p-4 font-sans">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">

                {/* Header Bar */}
                <div className="p-5 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <FiBookOpen size={22} />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                                Academic Result Sheet
                            </h2>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                <FiUser size={13} className="text-slate-400" />
                                Student Email: <span className="font-semibold text-slate-700">{studentEmail}</span>
                            </p>
                        </div>
                    </div>

                    {/* Overall Status Badge */}
                    <div className="flex items-center gap-2">
                        {!hasFailed ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <FiCheckCircle size={15} /> Passed
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                                <FiAlertCircle size={15} /> Needs Improvement
                            </span>
                        )}
                    </div>
                </div>

                {/* Summary Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50/30 border-b border-slate-100">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-[11px] font-semibold text-slate-500 block">Total Subjects</span>
                        <span className="text-base sm:text-lg font-bold text-slate-800">{data.length} Subjects</span>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-[11px] font-semibold text-slate-500 block">Total Obtained Marks</span>
                        <span className="text-base sm:text-lg font-bold text-blue-600">
                            {totalObtainedMarks} <span className="text-xs text-slate-400 font-normal">/ {totalFullMarks}</span>
                        </span>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-xl col-span-2 sm:col-span-1">
                        <span className="text-[11px] font-semibold text-slate-500 block">Average GPA</span>
                        <span className="text-base sm:text-lg font-bold text-indigo-600">{averageGPA} / 5.00</span>
                    </div>
                </div>

                {/* Responsive Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                            <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-600 uppercase text-[11px] font-bold tracking-wider">
                                <th className="py-3.5 px-4">#</th>
                                <th className="py-3.5 px-4">Subject Name</th>
                                <th className="py-3.5 px-4">Marks Obtained</th>
                                <th className="py-3.5 px-4">Letter Grade</th>
                                <th className="py-3.5 px-4">GPA Point</th>
                                <th className="py-3.5 px-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            {data.map((item, index) => {
                                const marksNum = Number(item.marks) || 0;
                                const { grade, gpa, color } = getGradeAndGPA(marksNum);
                                const isPass = marksNum >= 33;

                                return (
                                    <tr key={item._id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3.5 px-4 font-mono text-slate-400">{index + 1}</td>

                                        <td className="py-3.5 px-4 font-bold text-slate-800 flex items-center gap-2">
                                            <FiAward className="text-blue-600 shrink-0" size={15} />
                                            {item.subject}
                                        </td>

                                        <td className="py-3.5 px-4 font-semibold text-slate-700">
                                            {marksNum} <span className="text-slate-400 text-xs font-normal">/ 100</span>
                                        </td>

                                        <td className="py-3.5 px-4">
                                            <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-lg border ${color}`}>
                                                {grade}
                                            </span>
                                        </td>

                                        <td className="py-3.5 px-4 font-bold text-slate-800">
                                            {gpa.toFixed(2)}
                                        </td>

                                        <td className="py-3.5 px-4 text-right">
                                            {isPass ? (
                                                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-xs">
                                                    <FiCheckCircle size={13} /> Pass
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-rose-600 font-semibold text-xs">
                                                    <FiAlertCircle size={13} /> Fail
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}