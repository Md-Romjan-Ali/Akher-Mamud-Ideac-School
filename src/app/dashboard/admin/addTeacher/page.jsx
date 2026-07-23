'use client';

import React, { useState } from 'react';
import {
    HiOutlineUser,
    HiOutlineBookOpen,
    HiOutlinePhoto,
    HiOutlineAcademicCap,
    HiOutlineArrowPath
} from 'react-icons/hi2';

export default function TeacherRegistrationForm() {
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    // Native JavaScript preview handler (reads directly from file input event)
    const handleImagePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 32 * 1024 * 1024) {
                setStatusMessage({ type: 'error', text: 'File size must be under 32MB.' });
                return;
            }
            setImagePreview(URL.createObjectURL(file));
            setStatusMessage({ type: '', text: '' });
        }
    };

    // Helper function: Direct ImgBB API Upload
    const uploadToImgBB = async (file) => {
        const apiKey = "c5b005b2b94cfb2801454c3f6b665254";
        if (!apiKey) {
            throw new Error('ImgBB API key is missing in NEXT_PUBLIC_IMGBB_API_KEY.');
        }

        const body = new FormData();
        body.append('image', file);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: body,
        });

        const result = await response.json();
        if (result.success) {
            return result.data.url;
        } else {
            throw new Error(result.error?.message || 'Failed to upload image to ImgBB.');
        }
    };

    // Submit Handler using pure JavaScript FormData extraction
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage({ type: '', text: '' });
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        try {
            // 2. Extract image file directly from FormData
            const imageFile = formData.get('teacherImage');
            let uploadedImageUrl = '';

            if (imageFile && imageFile.name) {
                uploadedImageUrl = await uploadToImgBB(imageFile);
            }

            // 3. Collect form values into a clean JavaScript object using formData.get()
            const teacherPayload = {
                ...data,
                imageUrl: uploadedImageUrl, // Direct ImgBB URL string
            };

            console.log('Final Payload Extracted via FormData:', teacherPayload);

            setStatusMessage({
                type: 'success',
                text: 'Teacher registered successfully with ImgBB upload!',
            });

            // Reset form and local preview

            setImagePreview(null);

        } catch (err) {
            setStatusMessage({
                type: 'error',
                text: err.message || 'An error occurred during submission.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 31 }, (_, i) => currentYear - i);

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

                {/* Form Header */}
                <div className="bg-blue-600 px-8 py-6 text-white flex items-center gap-3">
                    <HiOutlineAcademicCap className="w-8 h-8 text-blue-100 shrink-0" />
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Teacher Registration</h2>
                        <p className="text-blue-100 text-sm mt-0.5">Submit details to register a new teacher.</p>
                    </div>
                </div>

                {/* Status Alert */}
                {statusMessage.text && (
                    <div className={`m-8 mb-0 p-4 rounded-lg border ${statusMessage.type === 'error'
                        ? 'bg-red-50 border-red-200 text-red-700'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        }`}>
                        <p className="text-sm font-medium">{statusMessage.text}</p>
                    </div>
                )}

                {/* Form - Managed without input state */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                    {/* Section 1: Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-md font-semibold text-slate-800 border-b pb-2 border-slate-100 flex items-center gap-2">
                            <HiOutlineUser className="text-blue-600" /> Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Teacher Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Teacher Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="teacherName"
                                    required
                                    placeholder="e.g. John Smith"
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                />
                            </div>

                            {/* National ID */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    National ID No. <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nationalId"
                                    required
                                    placeholder="e.g. 1993820194827"
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                />
                            </div>

                            {/* Father's Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Father`s Name</label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    placeholder="Father's full name"
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                />
                            </div>

                            {/* Mother's Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mother`s Name</label>
                                <input
                                    type="text"
                                    name="motherName"
                                    placeholder="Mother's full name"
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                />
                            </div>

                            {/* Blood Group */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Blood Group</label>
                                <select
                                    name="bloodGroup"
                                    defaultValue=""
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition bg-white"
                                >
                                    <option value="" disabled>Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                            <textarea
                                name="address"
                                rows="2"
                                placeholder="Full address details..."
                                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                            />
                        </div>
                    </div>

                    {/* Section 2: Academic Details */}
                    <div className="space-y-4 pt-2">
                        <h3 className="text-md font-semibold text-slate-800 border-b pb-2 border-slate-100 flex items-center gap-2">
                            <HiOutlineBookOpen className="text-blue-600" /> Academic Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Education Level (Text) */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Education Level <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="educationLevel"
                                    required
                                    placeholder="e.g. M.Sc. in Physics"
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                />
                            </div>

                            {/* Subject for Join */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Subject for Join <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="subjectForJoin"
                                    required
                                    placeholder="e.g. Higher Mathematics"
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                />
                            </div>

                            {/* Select Year */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Joining Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name='joinDate'
                                     required
                                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                    type="date" />
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Photo Upload */}
                    <div className="space-y-4 pt-2">
                        <h3 className="text-md font-semibold text-slate-800 border-b pb-2 border-slate-100 flex items-center gap-2">
                            <HiOutlinePhoto className="text-blue-600" /> Photo Upload
                        </h3>

                        <div className="flex items-center gap-6">
                            {/* Thumbnail Preview */}
                            <div className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Teacher Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <HiOutlinePhoto className="w-8 h-8 text-slate-300" />
                                )}
                            </div>

                            {/* File Input */}
                            <div className="grow">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImagePreview}
                                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition cursor-pointer"
                                />
                                <p className="text-xs text-slate-400 mt-1">Uploaded to ImgBB (Max file size: 32MB)</p>
                            </div>
                        </div>
                    </div>

                    {/* Submit Action */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <HiOutlineArrowPath className="animate-spin w-5 h-5 text-white" />
                                    <span>Processing & Uploading...</span>
                                </>
                            ) : (
                                <span>Submit Teacher Registration</span>
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}