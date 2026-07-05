"use client"; // Required for interactivity in Next.js App Router

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { HiOutlineMegaphone, HiOutlineAcademicCap } from "react-icons/hi2";

export default function AdmissionCircular() {
    return (
        <section className="fixed bottom-0 right-0 left-0 w-full mx-auto max-w-7xl">
            <div className=" px-6">
                <div className="rounded-[2rem] bg-white p-2 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/60">

                    {/* Top Auto-Scrolling Marquee Notice */}
                    <div className="relative flex items-center overflow-hidden rounded-xl bg-blue-50 py-3 pr-4 ring-1 ring-blue-100">
                        {/* Fixed Badge Label */}
                        <div className="z-10 flex items-center gap-1 bg-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md rounded-lg shrink-0">
                            <HiOutlineMegaphone className="h-4 w-4 animate-bounce" />
                            Notice
                        </div>

                        {/* React Fast Marquee Integration */}
                        <Marquee
                            speed={50}
                            pauseOnHover={true}
                            gradient={false}
                            className="text-sm font-medium text-blue-900"
                        >
                            <span className="mx-4">২০২৬ শিক্ষাবর্ষে ভর্তি কার্যক্রম শুরু হয়েছে। সীমিত আসনে ভর্তি চলছে—আজই আপনার ভর্তি নিশ্চিত করুন।</span>
                            <span className="mx-4">||</span>
                            <span className="mx-4">ভর্তি চলছে! আসন সংখ্যা সীমিত, আজই আপনার ভর্তি নিশ্চিত করুন।</span>
                            <span className="mx-4">||</span>
                            <span className="mx-4">ভর্তি ফরম জমা দেওয়ার শেষ তারিখ দ্রুত এগিয়ে আসছে। নির্ধারিত সময়ের মধ্যেই আপনার আবেদন সম্পন্ন করুন।</span>
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    );
}