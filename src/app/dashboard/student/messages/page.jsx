"use client";

import React from "react";
import { Avatar } from "@heroui/react";
import { FiAward, FiBookOpen, FiCode, FiCompass } from "react-icons/fi";

export default function TeacherMessagesSection() {
    // শিক্ষকদের মূল্যবান পরামর্শের ডাটা অবজেক্ট
    const adviceCards = [
        {
            id: 1,
            teacherName: "প্রিন্সিপাল স্যার",
            designation: "প্রধান উপদেষ্টা, AMIS",
            icon: <FiAward className="text-xl text-blue-600" />,
            iconBg: "bg-blue-50",
            title: "ধারাবাহিকতা ও সময়ের মূল্যায়ন",
            message: "আজকের কাজ কখনো আগামীকালের জন্য ফেলে রাখবে না। পড়াশোনা কিংবা স্কিল ডেভেলপমেন্ট—যাই করো না কেন, প্রতিদিনের ছোট ছোট প্রচেষ্টাই দিনশেষে বড় সফলতা এনে দেয়। সুশৃঙ্খল জীবনই সাফল্যের চাবিকাঠি।"
        },
        {
            id: 2,
            teacherName: "আইসিটি বিভাগীয় প্রধান",
            designation: "সিনিয়র শিক্ষক",
            icon: <FiCode className="text-xl text-indigo-600" />,
            iconBg: "bg-indigo-50",
            title: "থিওরির পাশাপাশি প্র্যাকটিক্যাল স্কিল",
            message: "শুধু মুখস্থ বিদ্যার ওপর নির্ভর করে জিপিএ-৫ পাওয়ার চেয়ে বাস্তবমুখী দক্ষতা অর্জন করা অনেক বেশি গুরুত্বপূর্ণ। পড়াশোনার পাশাপাশি নতুন প্রযুক্তি ও ওয়েব ডেভেলপমেন্টের মতো মডার্ন স্কিলগুলো এখনই আয়ত্ত করো।"
        },
        {
            id: 3,
            teacherName: "গাইড শিক্ষক",
            designation: "সহকারী অধ্যাপক",
            icon: <FiCompass className="text-xl text-emerald-600" />,
            iconBg: "bg-emerald-50",
            title: "ভুল থেকে শেখা ও ধৈর্য ধারণ",
            message: "যেকোনো নতুন জিনিস শেখার শুরুতে ভুল হওয়া বা ব্যর্থ হওয়া খুব স্বাভাবিক। কোডিং-এ বাগ আসা বা পড়া মনে না থাকা নিয়ে হতাশ হবে না। ধৈর্য ধরে ভুলগুলো শুধরে নেওয়াই একজন আদর্শ শিক্ষার্থীর লক্ষণ।"
        }
    ];

    return (
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white w-full">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
                        <FiBookOpen />
                        <span>শিক্ষকদের দিকনির্দেশনা</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                        শিক্ষকদের মূল্যবান পরামর্শমালা
                    </h2>
                    <p className="mt-3 text-base text-slate-500">
                        আমাদের শিক্ষার্থীদের ভবিষ্যৎ ক্যারিয়ার গঠন এবং পড়াশোনায় মনোযোগ বাড়াতে শিক্ষকদের পক্ষ থেকে কিছু বিশেষ গাইডলাইন।
                    </p>
                </div>

                {/* Cards Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {adviceCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Card Content Top */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    {/* Feature Icon */}
                                    <div className={`p-3 rounded-xl ${card.iconBg}`}>
                                        {card.icon}
                                    </div>
                                    {/* Placeholder Badge */}
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">
                                        AMIS Guide
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-800 mb-2">
                                    {card.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed italic">
                                    {card.message}
                                </p>
                            </div>

                            {/* Card Footer (Teacher Profile Info) */}
                            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-50">
                                <Avatar
                                    size="sm"
                                    className="bg-slate-100 text-slate-600 font-bold"
                                    name={card.teacherName[0]}
                                />
                                <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-slate-800 truncate">
                                        {card.teacherName}
                                    </h4>
                                    <p className="text-xs text-slate-400 truncate">
                                        {card.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}