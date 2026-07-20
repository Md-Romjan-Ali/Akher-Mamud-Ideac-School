"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
// Make sure this matches your Better Auth client setup path
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
    // Only keeping state for password visibility toggle
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form shortcut to grab all data at once
        const data = Object.fromEntries(new FormData(e.target));
        const rememberMe = data.rememberMe === "on"; // Checkboxes return "on" if checked

        try {
            // Better Auth sign in with email method
            const { data: session, error } = await authClient.signIn.email({
                email: data.email,
                password: data.password,
                dontRememberMe: !rememberMe, // Better Auth uses dontRememberMe by default
            });

            if (error) {
                alert(error.message || "Invalid email or password");
                return;
            }

            console.log("Logged in successfully:", session);
            // Redirect after successful login (e.g., window.location.href = '/dashboard')
        } catch (err) {
            console.error("Login error:", err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-slate-500 mt-1 font-medium">
                        Akhermamud Ideal School
                    </p>
                </div>

                {/* Google Login via Better Auth */}
                <button
                    type="button"
                    onClick={async () => {
                        await authClient.signIn.social({
                            provider: "google",
                        });
                    }}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl text-slate-700 font-medium bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors duration-200"
                >
                    <FaGoogle className="text-red-500 text-lg" />
                    <span>Continue with Google</span>
                </button>

                {/* Divider */}
                <div className="flex items-center my-6 text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    <div className="flex-1 border-t border-slate-200"></div>
                    <span className="px-3">or Sign In with Email</span>
                    <div className="flex-1 border-t border-slate-200"></div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-slate-700 mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                            </button>
                        </div>
                    </div>

                    {/* Form Options (Remember Me & Forgot Password) */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20"
                            />
                            <span className="text-xs font-medium text-slate-600">Remember me</span>
                        </label>

                        <a
                            href="#forgot-password"
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.99] transition-all duration-150 text-sm mt-2"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center mt-6 text-sm text-slate-500">
                    New to our school?{" "}
                    <Link
                        href={'/register'}
                        className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                    >
                        Create an account
                    </Link>
                </div>

            </div>
        </div>
    );
}