"use client"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Reachart = ({ attendanceData }) => {
    return (
        <div>
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
    );
};

export default Reachart;