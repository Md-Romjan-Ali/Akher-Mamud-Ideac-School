import { FaEdit, FaSearch, FaTrashAlt, FaUser } from "react-icons/fa";


export default function StudentTableFrontend() {
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
                    Total Students: <span className="font-bold text-sm">5</span>
                </div>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                    type="text"
                    placeholder="Search student by name, email, or roll..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm"
                />
            </div>

            {/* Student Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">

                        {/* Table Header */}
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                                <th className="py-4 px-6">Roll No</th>
                                <th className="py-4 px-6">Student Name</th>
                                <th className="py-4 px-6">Email Address</th>
                                <th className="py-4 px-6">Batch / Year</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200 text-sm">

                            {/* Row 1 */}
                            <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="py-4 px-6 font-mono text-xs font-bold text-slate-500 dark:text-slate-400">2026-01</td>
                                <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-xs border border-emerald-100 dark:border-emerald-900">
                                            M
                                        </div>
                                        <span>Md. Ramzan Ali</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">ramzan@school.edu</td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        2nd Year
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
                                <td className="py-4 px-6 font-mono text-xs font-bold text-slate-500 dark:text-slate-400">2026-02</td>
                                <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-xs border border-emerald-100 dark:border-emerald-900">
                                            M
                                        </div>
                                        <span>Maria Garcia</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">maria.garcia@school.edu</td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        1st Year
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
                                <td className="py-4 px-6 font-mono text-xs font-bold text-slate-500 dark:text-slate-400">2026-03</td>
                                <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-xs border border-emerald-100 dark:border-emerald-900">
                                            D
                                        </div>
                                        <span>David Wilson</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">david.w@school.edu</td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        3rd Year
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 rounded-lg text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all" title="Update">
                                            <FaEdit className="text-base" />
                                        </button>
                                        <button className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all" title="Delete">
                                            <FaTrashAlt
                                                className="text-base" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <p>Role: Student</p>
                    <p>Showing 3 records</p>
                </div>
            </div>
        </div>
    );
}