
import {
    FaCalendarCheck,
    FaClock,
    FaExclamationTriangle,
    FaUserClock,
    FaCheckCircle
} from 'react-icons/fa';
import Reachart from '@/components/Reachart';

// Monthly attendance trend data for the individual teacher
const attendanceData = [
    { month: "Jan", Present: 85, Absent: 15 },
    { month: "Feb", Present: 88, Absent: 12 },
    { month: "Mar", Present: 92, Absent: 8 },
    { month: "Apr", Present: 78, Absent: 22 },
    { month: "May", Present: 84, Absent: 16 },
    { month: "Jun", Present: 90, Absent: 10 },
];

export default function MyAttendance() {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans space-y-6">

            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <FaUserClock className="text-indigo-600" /> My Attendance Overview
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Track your monthly class attendance, punctual arrivals, and leave logs.
                    </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800/50 px-4 py-2.5 rounded-xl self-start md:self-auto">
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium uppercase">Overall Rate</p>
                    <p className="text-2xl font-black text-indigo-700 dark:text-indigo-300">95.8%</p>
                </div>
            </div>

            {/* Summary Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Days Present */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl">
                        <FaCheckCircle />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase">Total Present</p>
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">122 Days</p>
                    </div>
                </div>

                {/* Total Working Days */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl">
                        <FaCalendarCheck />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase">Working Days</p>
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">128 Days</p>
                    </div>
                </div>

                {/* Late Arrivals */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl">
                        <FaClock />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase">Late Arrivals</p>
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">5 Times</p>
                    </div>
                </div>

                {/* Absences / Leave */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xl">
                        <FaExclamationTriangle />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase">Total Leave</p>
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">4 Days</p>
                    </div>
                </div>

            </div>

            {/* Recharts Monthly Visualization Section */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                            Monthly Attendance Trend
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Breakdown of days present vs late arrivals per month
                        </p>
                    </div>
                    {/* Legend Indicators */}
                    <div className="flex items-center gap-4 text-xs font-semibold">
                        <div className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block"></span>
                            <span className="text-slate-600 dark:text-slate-300">Present</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                            <span className="text-slate-600 dark:text-slate-300">Late</span>
                        </div>
                    </div>
                </div>

                {/* Recharts Bar Chart */}
                <Reachart attendanceData={attendanceData} />
            </div>

        </div>
    );
}