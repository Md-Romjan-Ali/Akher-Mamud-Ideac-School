"use client";

import { studentDataPost } from "@/lib/post";
import { Spinner } from "@heroui/react";
import React, { useState } from "react";
import {
    FaUser,
    FaGraduationCap,
    FaUserShield,
    FaMapMarkerAlt,
    FaUserFriends,
    FaCalendarAlt,
    FaImage,
    FaPhoneAlt,
    FaEnvelope,
    FaSmile,
    FaSpinner,
    FaPaperPlane,
} from "react-icons/fa";

export default function StudentRegistrationForm() {
    // Only using minimal state for handling image preview and API upload status
    const [photoUrl, setPhotoUrl] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [loadSubmit, setLoadSubmit] = useState(false)
    // Upload image to ImgBB via FormData
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImagePreview(URL.createObjectURL(file));
        setUploading(true);

        const imgBbData = new FormData();
        imgBbData.append("image", file);

        try {
            // Replace YOUR_IMGBB_API_KEY with your actual ImgBB API Key
            const apiKey = "c5b005b2b94cfb2801454c3f6b665254";
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: "POST",
                body: imgBbData,
            });

            const resData = await response.json();

            if (resData.success) {
                setPhotoUrl(resData.data.url);
            } else {
                alert("Image upload failed. Please check your ImgBB API Key.");
            }
        } catch (error) {
            console.error("ImgBB Upload Error:", error);
            alert("Error uploading image to ImgBB.");
        } finally {
            setUploading(false);
        }
    };

    // Extract all inputs using the standard browser FormData object
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadSubmit(true)
        // Pass the form element directly to FormData
        const formData = new FormData(e.target);
        // Convert entries into a standard JS Object
        const formValues = Object.fromEntries(formData.entries());

        // Attach the uploaded ImgBB URL
        formValues.photoUrl = photoUrl;
        const submitAdmissionData = await studentDataPost(formValues)
        console.log("FormAPI:", submitAdmissionData, formValues);
        setLoadSubmit(false)
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 sm:p-10 text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                            <FaGraduationCap className="text-3xl text-emerald-200" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Student Admission Form
                            </h1>
                            <p className="text-emerald-100 text-sm mt-1">
                                Fill in the credentials below to register a new student record.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Element */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">

                    {/* Section 1: Personal Details */}
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 flex items-center gap-2">
                            <FaUser className="text-emerald-600" /> Personal Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Student Name */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Student Name <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="text"
                                        name="studentName"
                                        required
                                        placeholder="John Doe"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Email Address <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="student@school.com"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Class */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Class / Grade <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <FaGraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="text"
                                        name="className"
                                        required
                                        placeholder="e.g. Class 10"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Role */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Role / Roll No <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <FaUserShield className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="text"
                                        name="role"
                                        required
                                        placeholder="e.g. 1024"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Date of Birth <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="date"
                                        name="dob"
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Section 2: Family & Contact */}
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 flex items-center gap-2">
                            <FaUserFriends className="text-emerald-600" /> Family & Contact
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Father's Name */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Father`s Name
                                </label>
                                <div className="relative">
                                    <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="text"
                                        name="fatherName"
                                        placeholder="Father's full name"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Mother's Name */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Mother`s Name
                                </label>
                                <div className="relative">
                                    <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="text"
                                        name="motherName"
                                        placeholder="Mother's full name"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Phone Number <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <FaPhoneAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        required
                                        placeholder="+880 1700-000000"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Student Category */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Student Category / Type
                                </label>
                                <div className="relative">
                                    <FaSmile className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
                                    <select
                                        name="studentType"
                                        defaultValue="good"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm appearance-none transition-all cursor-pointer"
                                    >
                                        <option value="good">Good</option>
                                        <option value="better">Better</option>
                                        <option value="bad">Bad</option>
                                    </select>
                                </div>
                            </div>

                            {/* Address (Full Width) */}
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                    Address
                                </label>
                                <div className="relative">
                                    <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                                    <textarea
                                        name="address"
                                        rows="3"
                                        placeholder="Enter permanent address details..."
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                                    ></textarea>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Section 3: Photo Upload */}
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 flex items-center gap-2">
                            <FaImage className="text-emerald-600" /> Student Profile Photo
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">

                            {/* Photo Preview Frame */}
                            <div className="w-24 h-24 rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden flex items-center justify-center shrink-0 relative">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <FaImage className="text-slate-300 dark:text-slate-600 text-3xl" />
                                )}
                                {uploading && (
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                                        <FaSpinner className="animate-spin text-xl" />
                                    </div>
                                )}
                            </div>

                            {/* Upload Action */}
                            <div className="space-y-2 text-center sm:text-left">
                                <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm cursor-pointer shadow-sm transition-all">
                                    <FaImage />
                                    {uploading ? "Uploading to ImgBB..." : "Upload Photo to ImgBB"}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        disabled={uploading}
                                        className="hidden"
                                    />
                                </label>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Supported formats: JPG, PNG or WEBP.
                                </p>
                                {photoUrl && (
                                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 break-all">
                                        ✓ Uploaded to ImgBB
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={uploading}
                            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >

                            <FaPaperPlane />
                            {
                                loadSubmit ?
                                    <Spinner color="current" />

                                    : 'Register Student'
                            }

                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}