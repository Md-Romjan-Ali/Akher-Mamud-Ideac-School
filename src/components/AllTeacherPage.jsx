'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    FaChalkboardTeacher,
    FaSearch,
    FaTrashAlt,
    FaEdit,
    FaGraduationCap,
    FaPhoneAlt,
    FaIdCard,
    FaUser
} from 'react-icons/fa';
import Link from 'next/link';
import { deleteTeacher } from '@/lib/delete';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function TeacherTableFrontend({ teachers }) {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter()
    // Search filter matching name, phone, or education
    const filteredTeachers = teachers.filter((teacher) => {
        const q = searchQuery.toLowerCase();
        return (
            teacher.teacherName.toLowerCase().includes(q) ||
            teacher.phone.toLowerCase().includes(q) ||
            teacher.educationLevel.toLowerCase().includes(q) ||
            teacher.subjectForJoin.toLowerCase().includes(q)
        );
    });

    const handleUpdate = (teacher) => {

    };

    const handleDelete = async (id) => {
        await deleteTeacher(id)
        router.refresh()
        toast.success('Successfully Delete')
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans space-y-6">

            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                        <FaChalkboardTeacher className="text-blue-600 dark:text-blue-500" /> Faculty Directory
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Manage teacher profiles, subject assignments, and contact details.
                    </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 px-4 py-2 rounded-xl text-xs font-semibold text-blue-700 dark:text-blue-400 self-start sm:self-auto">
                    Total Faculty: <span className="font-bold text-sm">{filteredTeachers.length}</span>
                </div>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, subject, or education..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                />
            </div>

            {/* Main Container */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">

                {/* Desktop View: Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                                <th className="py-4 px-6">Image</th>
                                <th className="py-4 px-6">Teacher Details</th>
                                <th className="py-4 px-6">Phone Number</th>
                                <th className="py-4 px-6">Subject & Education</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200 text-sm">
                            {filteredTeachers.length > 0 ? (
                                filteredTeachers.map((teacher) => (
                                    <tr key={teacher._id || teacher.nationalId} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">

                                        {/* Image */}
                                        <td className="py-4 px-6">
                                            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                                {teacher.imageUrl ? (
                                                    <Image
                                                        fill
                                                        src={teacher.imageUrl}
                                                        alt={teacher.teacherName}
                                                        className="object-cover"
                                                        sizes="44px"
                                                    />
                                                ) : (
                                                    <FaUser className="text-slate-400 text-lg" />
                                                )}
                                            </div>
                                        </td>

                                        {/* Teacher Details */}
                                        <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                            <div>
                                                <p className="text-base font-bold">{teacher.teacherName}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal flex items-center gap-1 mt-0.5">
                                                    <FaIdCard className="text-blue-500" /> NID: {teacher.nationalId}
                                                </p>
                                            </div>
                                        </td>

                                        {/* Phone Number */}
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                                                <FaPhoneAlt className="text-blue-500 text-xs" />
                                                {teacher.phone}
                                            </span>
                                        </td>

                                        {/* Subject & Education */}
                                        <td className="py-4 px-6">
                                            <div className="space-y-1">
                                                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                                                    <FaGraduationCap className="text-blue-500 text-sm" />
                                                    {teacher.subjectForJoin}
                                                </span>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 pl-1">
                                                    {teacher.educationLevel}
                                                </p>
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleUpdate(teacher)}
                                                    className="p-2 rounded-lg text-blue-600 hover:text-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
                                                    title="Update Teacher"
                                                >
                                                    <FaEdit className="text-base" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(teacher._id)}
                                                    className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all"
                                                    title="Delete Teacher"
                                                >
                                                    <FaTrashAlt className="text-base" />
                                                </button>
                                                <Link
                                                    href={`/dashboard/admin/allTeacher/${teacher._id}`}
                                                >
                                                    Details
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-8 text-slate-400 text-sm">
                                        No teacher records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View: Card Stack Layout */}
                <div className="block md:hidden divide-y divide-slate-100 dark:divide-slate-800">
                    {filteredTeachers.length > 0 ? (
                        filteredTeachers.map((teacher) => (
                            <div key={teacher._id || teacher.nationalId} className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                                            {teacher.imageUrl ? (
                                                <Image
                                                    fill
                                                    src={teacher.imageUrl}
                                                    alt={teacher.teacherName}
                                                    className="object-cover"
                                                    sizes="48px"
                                                />
                                            ) : (
                                                <FaUser className="text-slate-400 text-xl" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-base">
                                                {teacher.teacherName}
                                            </h3>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                                <FaPhoneAlt className="text-blue-500 text-[10px]" /> {teacher.phone}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => handleUpdate(teacher)}
                                            className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                                        >
                                            <FaEdit className="text-base" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(teacher._id)}
                                            className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                                        >
                                            <FaTrashAlt className="text-base" />
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-slate-50 dark:border-slate-800/60 flex flex-wrap gap-2 text-xs">
                                    <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-medium">
                                        {teacher.subjectForJoin}
                                    </span>
                                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                        {teacher.educationLevel}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-6 text-slate-400 text-sm">
                            No teacher records found.
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <p>Role: Teacher / Faculty</p>
                    <p>Showing {filteredTeachers.length} records</p>
                </div>

            </div>
        </div>
    );
}