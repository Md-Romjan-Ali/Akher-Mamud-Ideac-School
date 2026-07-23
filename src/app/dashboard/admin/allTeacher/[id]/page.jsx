
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaUser,
    FaArrowLeft,
    FaPhoneAlt,
    FaIdCard,
    FaGraduationCap,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaTint,
    FaBookOpen,
    FaEdit,
    FaPrint
} from 'react-icons/fa';
import { getTeacherByid } from '@/lib/get';

export default async function TeacherDetailsPage({ params }) {
    const { id } = await params;
    const teacher = await getTeacherByid(id)

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8 font-sans space-y-6">

            {/* Top Action Navigation */}
            <div className="flex items-center justify-between">
                <Link
                    href="/teachers"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                    <FaArrowLeft /> Back to Directory
                </Link>
                <div className="flex items-center gap-2">
                    <button
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 shadow-sm transition"
                    >
                        <FaPrint className="text-slate-500" /> Print Profile
                    </button>
                    <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition">
                        <FaEdit /> Edit Profile
                    </button>
                </div>
            </div>

            {/* Main Profile Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">

                {/* Banner Header */}
                <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800 relative"></div>

                {/* Profile Info Header */}
                <div className="px-6 md:px-8 pb-6 relative -mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row items-start md:items-end gap-5">

                        {/* Avatar / Photo */}
                        <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 shadow-md shrink-0 flex items-center justify-center">
                            {teacher.imageUrl ? (
                                <Image
                                    fill
                                    src={teacher.imageUrl}
                                    alt={teacher.teacherName}
                                    className="object-cover"
                                    sizes="128px"
                                />
                            ) : (
                                <FaUser className="text-slate-400 text-5xl" />
                            )}
                        </div>

                        {/* Name & Primary Meta */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {teacher.teacherName}
                                </h1>
                                {teacher.bloodGroup && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/50 text-rose-600 border border-rose-200 dark:border-rose-900">
                                        <FaTint className="text-[10px]" /> {teacher.bloodGroup}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                                <FaBookOpen className="text-xs" /> Joining Subject: {teacher.subjectForJoin}
                            </p>
                        </div>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium self-stretch md:self-auto flex md:flex-col justify-between items-end gap-1 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-800">
                        <span>Joined: <strong className="text-slate-700 dark:text-slate-300">{teacher.joinDate}</strong></span>
                        <span>NID: <strong className="text-slate-700 dark:text-slate-300">{teacher.nationalId}</strong></span>
                    </div>
                </div>

                {/* Detailed Data Sections */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Section 1: Personal & Family Information */}
                    <div className="space-y-4">
                        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b pb-2 border-slate-100 dark:border-slate-800">
                            <FaUser className="text-blue-600" /> Personal & Family Info
                        </h2>

                        <dl className="grid grid-cols-1 gap-3 text-sm">
                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Full Name</dt>
                                <dd className="font-semibold text-slate-800 dark:text-slate-200">{teacher.teacherName}</dd>
                            </div>

                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Father`s Name</dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200">{teacher.fatherName || 'N/A'}</dd>
                            </div>

                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Mother`s Name</dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200">{teacher.motherName || 'N/A'}</dd>
                            </div>

                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">National ID</dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1">
                                    <FaIdCard className="text-blue-500 text-xs" /> {teacher.nationalId}
                                </dd>
                            </div>

                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Blood Group</dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200">{teacher.bloodGroup || 'Not specified'}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Section 2: Contact & Academic Information */}
                    <div className="space-y-4">
                        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b pb-2 border-slate-100 dark:border-slate-800">
                            <FaGraduationCap className="text-blue-600" /> Academic & Contact Info
                        </h2>

                        <dl className="grid grid-cols-1 gap-3 text-sm">
                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Phone Number</dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                    <FaPhoneAlt className="text-blue-500 text-xs" /> {teacher.phone}
                                </dd>
                            </div>

                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Education Level</dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200">{teacher.educationLevel}</dd>
                            </div>

                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Subject for Join</dt>
                                <dd className="font-semibold text-blue-600 dark:text-blue-400">{teacher.subjectForJoin}</dd>
                            </div>

                            <div className="flex justify-between py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                                <dt className="text-slate-500 dark:text-slate-400">Joining Date</dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                    <FaCalendarAlt className="text-blue-500 text-xs" /> {teacher.joinDate}
                                </dd>
                            </div>

                            <div className="py-1.5">
                                <dt className="text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-blue-500 text-xs" /> Residential Address
                                </dt>
                                <dd className="font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                                    {teacher.address || 'No address provided'}
                                </dd>
                            </div>
                        </dl>
                    </div>

                </div>

                {/* Footer info banner */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 md:px-8 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <span>Faculty Member Profile</span>
                    <span>Status: Active</span>
                </div>

            </div>
        </div>
    );
}