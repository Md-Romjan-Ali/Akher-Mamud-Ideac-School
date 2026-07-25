"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiHome, FiArrowLeft, FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center space-y-8">

                {/* Visual Icon Badge */}
                <div className="relative inline-flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-100/80 rounded-3xl flex items-center justify-center text-blue-600 shadow-inner">
                        <FiAlertCircle className="w-12 h-12" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                        404 Error
                    </span>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
                        Page Not Found
                    </h1>
                    <p className="text-base text-slate-600">
                        Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or never existed.
                    </p>
                </div>

                {/* Navigation Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                        onClick={() => router.back()}
                        type="button"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <FiHome className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                {/* Footer Help Note */}
                <div className="pt-8 border-t border-slate-200/60">
                    <p className="text-xs text-slate-400">
                        If you believe this is an error, please contact support or check your URL.
                    </p>
                </div>

            </div>
        </main>
    );
}