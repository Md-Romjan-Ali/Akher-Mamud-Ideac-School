"use client";

import React, { useState, useEffect } from "react";
import { Spinner, ProgressBar } from "@heroui/react";
import { FiBookOpen } from "react-icons/fi";

export default function Loading() {
    const [progress, setProgress] = useState(15);

    // Simulated progress tick for smoother visual feedback
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => (prev >= 90 ? 90 : prev + 12));
        }, 300);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Ambient Background Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Main Loading Card */}
            <div className="relative z-10 w-full max-w-sm bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 shadow-2xl shadow-blue-500/5 flex flex-col items-center text-center">

                {/* Brand Icon with Spinner Container */}
                <div className="relative mb-6 flex items-center justify-center">
                    {/* HeroUI v3.2.2 Spinner Primitive */}
                    <Spinner size="xl" color="accent" className="scale-125" />

                    {/* Center Brand Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                        <FiBookOpen className="w-5 h-5" />
                    </div>
                </div>

                {/* Status Messages */}
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                    Loading AMIS
                </h2>
                <p className="text-xs font-medium text-slate-500 mb-6">
                    Setting up your workspace...
                </p>

                {/* HeroUI v3.2.2 ProgressBar Primitive */}
                <div className="w-full space-y-1.5">
                    <ProgressBar
                        value={progress}
                        size="sm"
                        color="accent"
                        aria-label="Loading workspace progress"
                    />
                    <div className="flex justify-between items-center text-[11px] font-semibold text-slate-400 px-0.5">
                        <span>Please wait</span>
                        <span>{progress}%</span>
                    </div>
                </div>

            </div>

            {/* Subtitle / Footer hint */}
            <p className="relative z-10 text-xs text-slate-400 mt-8 font-medium">
                Academic Management Information System
            </p>

        </main>
    );
}