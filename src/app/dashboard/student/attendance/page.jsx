"use client";

import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { FiCalendar, FiTrendingUp } from "react-icons/fi";

export default function AttendanceChartSection() {
    // গত ৬ মাসের ডেমো অ্যাটেনডেন্স ডাটা (শতাংশ হিসেবে)
    const attendanceData = [
        { month: "Jan", Present: 85, Absent: 15 },
        { month: "Feb", Present: 88, Absent: 12 },
        { month: "Mar", Present: 92, Absent: 8 },
        { month: "Apr", Present: 78, Absent: 22 },
        { month: "May", Present: 84, Absent: 16 },
        { month: "Jun", Present: 90, Absent: 10 },
    ];

    return (
        <section className="py-12 px-4 md:px-8 bg-slate-50/50 w-full">
            <div className="max-w-4xl mx-auto">

                {/* Chart Card Wrapper */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

                    {/* Header Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-2">
                                <FiCalendar />
                                <span>Academic Analytics</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                                Monthly Attendance Overview
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5">
                                Comparative analytics of students` presence vs absence ratios.
                            </p>
                        </div>

                        {/* Summary Badge */}
                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3 self-start sm:self-center">
                            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                <FiTrendingUp className="text-lg" />
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg. Present</span>
                                <span className="text-sm font-extrabold text-slate-800">86.1%</span>
                            </div>
                        </div>
                    </div>

                    {/* Recharts Container */}
                    <div className="w-full h-80 text-xs font-medium text-slate-500">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={attendanceData}
                                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    stroke="#94a3b8"
                                    dy={10}
                                />
                                <YAxis
                                    domain={[0, 100]}
                                    tickLine={false}
                                    axisLine={false}
                                    stroke="#94a3b8"
                                    tickFormatter={(val) => `${val}%`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #e2e8f0",
                                        borderRadius: "12px",
                                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)"
                                    }}
                                    cursor={{ fill: '#f8fafc' }}
                                />
                                <Legend
                                    verticalAlign="top"
                                    height={40}
                                    iconType="circle"
                                    iconSize={8}
                                />
                                {/* Present Bar (Blue Aesthetic) */}
                                <Bar
                                    dataKey="Present"
                                    name="Present Rate"
                                    fill="#2563eb"
                                    radius={[4, 4, 0, 0]}
                                    maxBarSize={40}
                                />
                                {/* Absent Bar (Slate/Red Accent) */}
                                <Bar
                                    dataKey="Absent"
                                    name="Absent Rate"
                                    fill="#cbd5e1"
                                    radius={[4, 4, 0, 0]}
                                    maxBarSize={40}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>

            </div>
        </section>
    );
}