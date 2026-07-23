"use client";

import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
// Assuming you set up your Better Auth client instance here
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // One-line shortcut to get all input fields as a single object
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        try {
            // Better Auth standard sign-up method
            const { data: session, error } = await authClient.signUp.email({
                email: data.email,
                password: data.password,
                name: data.name,
                image: data.imageUrl, // Map the image URL directly
            });

            if (error) {
                alert(error.message || "Registration failed");
                return;
            }

            console.log("Registered successfully:", session);
            // Redirect your user here (e.g., router.push('/dashboard'))
        } catch (err) {
            console.error("Auth error:", err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Create Account</h2>
                    <p className="text-sm text-slate-500 mt-1 font-medium">Akhermamud Ideal School</p>
                </div>

                {/* Google Authentication via Better Auth */}
                <button
                    type="button"
                    onClick={async () => await authClient.signIn.social({ provider: "google" })}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl text-slate-700 font-medium bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors duration-200"
                >
                    <FcGoogle size={25} />
                    <span>Continue with Google</span>
                </button>

                <div className="flex items-center my-6 text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    <div className="flex-1 border-t border-slate-200"></div>
                    <span className="px-3">or Register with Email</span>
                    <div className="flex-1 border-t border-slate-200"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                        <input type="text" id="name" name="name" required placeholder="Your full name" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="name@example.com" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm" />
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-slate-700 mb-1.5">Profile Image URL</label>
                        <input type="url" id="imageUrl" name="imageUrl" required placeholder="https://example.com/photo.jpg" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} id="password" name="password" required placeholder="Create a strong password" className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm" />
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

                    <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.99] transition-all duration-150 text-sm mt-4">
                        Register
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-slate-500">
                    Already have an account?{" "}
                    <a href="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                        Log In
                    </a>
                </div>

            </div>
        </div>
    );
}