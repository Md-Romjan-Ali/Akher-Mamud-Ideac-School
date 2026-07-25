import React from 'react';

export default function TableSkeleton() {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans space-y-6 animate-pulse">

            {/* Header Banner Skeleton */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="space-y-2">
                    <div className="h-7 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                    <div className="h-4 w-72 bg-slate-100 dark:bg-slate-800/60 rounded-md"></div>
                </div>
                <div className="h-8 w-32 bg-slate-200 dark:bg-slate-800 rounded-xl self-start sm:self-auto"></div>
            </div>

            {/* Search Input Skeleton */}
            <div className="h-11 max-w-md bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"></div>

            {/* Main Container Skeleton */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">

                {/* Desktop View Skeleton: Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
                                <th className="py-4 px-6"><div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded"></div></th>
                                <th className="py-4 px-6"><div className="h-3 w-28 bg-slate-200 dark:bg-slate-800 rounded"></div></th>
                                <th className="py-4 px-6"><div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div></th>
                                <th className="py-4 px-6"><div className="h-3 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div></th>
                                <th className="py-4 px-6 text-center"><div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded mx-auto"></div></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {[...Array(5)].map((_, index) => (
                                <tr key={index}>
                                    {/* Image */}
                                    <td className="py-4 px-6">
                                        <div className="w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                                    </td>

                                    {/* Teacher Details */}
                                    <td className="py-4 px-6 space-y-2">
                                        <div className="h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800/60 rounded"></div>
                                    </td>

                                    {/* Phone */}
                                    <td className="py-4 px-6">
                                        <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                    </td>

                                    {/* Subject & Education */}
                                    <td className="py-4 px-6 space-y-2">
                                        <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                        <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800/60 rounded"></div>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-4 px-6">
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="h-5 w-5 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                            <div className="h-4 w-14 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View Skeleton: Cards */}
                <div className="block md:hidden divide-y divide-slate-100 dark:divide-slate-800">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800/60 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-5 w-5 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                    <div className="h-4 w-12 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                </div>
                            </div>
                            <div className="pt-2 flex gap-2">
                                <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                <div className="h-6 w-24 bg-slate-100 dark:bg-slate-800/60 rounded-md"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Skeleton */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div className="h-3 w-28 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
                </div>

            </div>
        </div>
    );
}