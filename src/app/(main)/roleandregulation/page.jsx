"use client";

import React from "react";
import {
    FiFileText,
    FiDownload,
    FiBookOpen,
    FiDollarSign,
    FiClock,
    FiShield,
    FiAlertCircle
} from "react-icons/fi";

export default function AdmissionRulesText() {
    const rules = [
        {
            id: 1,
            icon: <FiBookOpen className="text-blue-600 text-lg" />,
            title: "১. একাডেমিক শৃঙ্খলা ও উপস্থিতি",
            description:
                "শিক্ষার্থীদের পুরো সেমিস্টার জুড়ে প্রতিটি কোর্সে কমপক্ষে ৮০% উপস্থিতি বজায় রাখতে হবে। কোনো বৈধ কারণ ছাড়া ২০%-এর বেশি অনুপস্থিত থাকলে পরীক্ষায় অংশগ্রহণের সুযোগ বাতিল বলে গণ্য হবে। পরীক্ষায় নকল বা কোনো ধরনের অসাধুপায় অবলম্বন সম্পূর্ণ নিষিদ্ধ।",
        },
        {
            id: 2,
            icon: <FiDollarSign className="text-emerald-600 text-lg" />,
            title: "২. ফি পরিশোধ ও রিফান্ড নীতি",
            description:
                "ক্লাস শুরুর পূর্বেই সমস্ত ভর্তি ও টিউশন ফি পরিশোধ করতে হবে। ভর্তি রেজিস্ট্রেশনের ১৪ দিনের মধ্যে আবেদন করা হলে ১০% প্রশাসনিক ফি কেটে বাকি টাকা রিফান্ড করা হবে। ১৪ দিন পর কোনো ফি ফেরত দেওয়া হবে না।",
        },
        {
            id: 3,
            icon: <FiClock className="text-amber-600 text-lg" />,
            title: "৩. ক্লাসের সময়সূচী ও সময়ানুবর্তিতা",
            description:
                "শিক্ষার্থীদের নির্ধারিত সময়ের অন্তত ৫ মিনিট আগে ক্লাসে উপস্থিত হতে হবে। ক্লাসে ১৫ মিনিটের বেশি দেরি করে ৩ দিন উপস্থিত হলে তা ১ দিনের পূর্ণ অনুপস্থিতি (Absence) হিসেবে গণ্য হবে।",
        },
        {
            id: 4,
            icon: <FiShield className="text-purple-600 text-lg" />,
            title: "৪. আচরণবিধি ও নিরাপত্তা",
            description:
                "শিক্ষক, সহপাঠী এবং কর্মচারীদের সাথে সর্বদা শালীন ও সম্মানজনক আচরণ করতে হবে। কোনো ধরনের বৈষম্য, র‌্যাগিং, গালাগালি বা প্রতিষ্ঠানের মালামাল ভাঙচুর করলে শিক্ষার্থীকে তাৎক্ষণিক বরখাস্ত বা স্থায়ী বহিষ্কার করা হতে পারে।",
        },
    ];


    return (
        <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-xs font-sans">

            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <FiFileText size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                            ভর্তির নিয়মাবলী ও নীতিমালা
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            ভর্তি নিশ্চিত করার পূর্বে নীতিমালাগুলো মনোযোগ দিয়ে পড়ুন।
                        </p>
                    </div>
                </div>

                {/* Download PDF Button */}
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm transition cursor-pointer shrink-0"
                >
                    <FiDownload size={16} />
                    ফরম ডাউনলোড করুন
                </button>
            </div>

            {/* Info Notice */}
            <div className="my-5 flex items-center gap-2.5 p-3.5 bg-blue-50 border border-blue-200/60 rounded-xl text-blue-900 text-xs sm:text-sm">
                <FiAlertCircle className="shrink-0 text-blue-600 text-lg" />
                <span>রেজিস্ট্রেশনের মাধ্যমে সকল শিক্ষার্থী নিচের নিয়মাবলী মেনে চলতে বাধ্য থাকবে।</span>
            </div>

            {/* Rules Document Body */}
            <div className="space-y-4">
                {rules.map((rule) => (
                    <div
                        key={rule.id}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                        <div className="flex items-center gap-2.5 mb-2">
                            <div className="p-1.5 bg-white rounded-lg shadow-xs">
                                {rule.icon}
                            </div>
                            <h3 className="text-sm font-bold text-slate-800">
                                {rule.title}
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                            {rule.description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}