
import { getDataById } from "@/lib/get";
import Image from "next/image";
import Link from "next/link";
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
    FiActivity,
    FiMapPin,
    FiPhone,
    FiUserCheck
} from "react-icons/fi";



export default async function StudentDetailsPage({ params }) {
    const { id } = await params;
    const studentDetails = await getDataById(id)
    const { studentName, photoUrl, initials, fatherName, motherName, dob, studentType, phoneNumber, email, className, role, address } = studentDetails
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6 my-6 font-sans antialiased text-slate-800">

            {/* 1. Navigation Header Row */}
            <div className="flex items-center justify-between mb-6">
                <Link
                    href={'/dashboard/teacher/allStudent'}
                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition cursor-pointer group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" /> Back to Directory
                </Link>

            </div>

            {/* 2. Primary Profile Header Block */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">

                    {/* Next.js Avatar Image or Initials Fallback */}
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-2xl flex items-center justify-center shadow-md overflow-hidden shrink-0 border-2 border-white dark:border-slate-800">
                        {photoUrl ? (
                            <Image
                                src={photoUrl}
                                alt={studentName}
                                fill
                                className="object-cover"
                                sizes="80px"
                                priority
                            />
                        ) : (
                            <span>{initials}</span>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                                {studentName}
                            </h1>

                            {/* Dynamic Student Type Badge */}
                            {studentType === "better" && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                    <FiAward className="w-3 h-3" /> Better Student
                                </span>
                            )}
                            {studentType === "good" && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                    <FiTrendingUp className="w-3 h-3" /> Good
                                </span>
                            )}
                            {(studentType === "bad") && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                                    <FiAlertCircle className="w-3 h-3" /> Needs Focus
                                </span>
                            )}
                        </div>

                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-3 flex-wrap">
                            <span className="flex items-center gap-1.5">
                                <FiMail className="text-slate-400" /> {email}
                            </span>
                            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                            <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                                <FiBookOpen /> Class {className}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Role Tag & ID Badge */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 border-t sm:border-t-0 border-slate-100 dark:border-slate-800 pt-3 sm:pt-0">
                    <span className="text-xs uppercase font-bold text-slate-400 dark:text-slate-500">System Role</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-lg capitalize border border-slate-200 dark:border-slate-700">
                        {role}
                    </span>
                </div>
            </div>

            {/* 3. Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Left Column: Academic & Attendance Summary */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                            Academic Metrics
                        </h3>

                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <FiHash size={14} /> Class Enrolled
                                </span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">
                                    Class {className}
                                </span>
                            </li>

                            {/* Static Attendance Metric */}
                            <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <FiActivity size={14} /> Attendance Rate
                                </span>
                                <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded text-xs">
                                    94% (Static)
                                </span>
                            </li>

                            <li className="flex items-center justify-between pt-0.5">
                                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <FiUserCheck size={14} /> Category
                                </span>
                                <span className="text-slate-800 dark:text-slate-200 font-medium capitalize">
                                    {studentType}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Personal & Guardian Details */}
                <div className="md:col-span-2 flex flex-col gap-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                            Personal & Guardian Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

                            {/* Phone Number */}
                            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/80">
                                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                                    <FiPhone size={13} /> Phone Number
                                </span>
                                <p className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                                    {phoneNumber}
                                </p>
                            </div>

                            {/* Date of Birth */}
                            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/80">
                                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                                    <FiCalendar size={13} /> Date of Birth
                                </span>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">
                                    {dob}
                                </p>
                            </div>

                            {/* Father's Name */}
                            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/80">
                                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-1 block">
                                    Father`s Name
                                </span>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">
                                    {fatherName}
                                </p>
                            </div>

                            {/* Mother's Name */}
                            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/80">
                                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-1 block">
                                    Mother`s Name
                                </span>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">
                                    {motherName}
                                </p>
                            </div>

                            {/* Full Address */}
                            <div className="sm:col-span-2 p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/80">
                                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                                    <FiMapPin size={13} /> Address
                                </span>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">
                                    {address}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}