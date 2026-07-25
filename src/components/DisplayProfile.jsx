"use client";

import { Button } from "@heroui/react";
import { FiEdit3, FiMail, FiShield, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export default function DisplayProfile({ user }) {
    return (
        <div className="min-h-screen bg-slate-50/50 flex items-center justify-center p-4">
            {/* Card Container */}
            <div className="w-full max-w-md bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden transition-all">

                {/* Hero Header Banner */}
                <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                </div>

                {/* Profile Details Area */}
                <div className="px-6 pb-6 pt-0 text-center flex flex-col items-center relative">

                    {/* Floating Avatar Container */}
                    <div className="-mt-16 mb-4 relative group">
                        <div className="p-1.5 bg-white rounded-2xl shadow-lg shadow-blue-500/10">
                            <Image
                                className="rounded-xl object-cover w-28 h-28 border border-slate-100"
                                alt={user?.name || "User profile picture"}
                                src={user?.image || "/avatar-placeholder.png"}
                                width={112}
                                height={112}
                                priority
                            />
                        </div>
                        {/* Online Indicator Badge */}
                        <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm" />
                    </div>

                    {/* Name & Account Status */}
                    <div className="flex items-center gap-1.5 justify-center mb-1">
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                            {user?.name || "Anonymous User"}
                        </h1>
                        <FiCheckCircle className="text-blue-600 text-lg flex-shrink-0" title="Verified Account" />
                    </div>

                    {/* Email Info Tag */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-4 bg-slate-100/80 px-3 py-1 rounded-full">
                        <FiMail className="text-slate-400" />
                        <span>{user?.email || "No email provided"}</span>
                    </div>

                    {/* Dynamic Role Badge */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-full px-3.5 py-1 mb-6 capitalize tracking-wide shadow-sm">
                        <FiShield className="text-blue-500" />
                        <span>{user?.role || "Member"}</span>
                    </div>

                    {/* Action Button */}
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 py-3 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                    >
                        <FiEdit3 className="text-base" />
                        <span>Edit Profile</span>
                    </Button>

                </div>
            </div>
        </div>
    );
}