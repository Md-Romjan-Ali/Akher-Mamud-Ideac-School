"use client"
import { Input, Select, Button, ListBox, Label, } from "@heroui/react";
import {
    FaUser,
    FaUserFriends,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaIdCard,
    FaTint,
    FaCloudUploadAlt,
    FaSpinner
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function StudentForm() {

    // Image upload states
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Blood group options for HeroUI Select
    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    // Handle Image Selection & Automatic Upload to ImgBB
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImageFile(file);
        setIsUploading(true);

        // Create FormData for ImgBB API
        const imageData = new FormData();
        imageData.append("image", file);

        // Replace with your actual ImgBB API key
        const IMGBB_API_KEY = "c5b005b2b94cfb2801454c3f6b665254";

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: "POST",
                body: imageData,
            });

            const result = await response.json();

            if (result.success) {
                setImageUrl(result.data.url);
                alert("Image uploaded successfully!");
            } else {
                alert("Image upload failed. Please try again.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("An error occurred during image upload.");
        } finally {
            setIsUploading(false);
        }
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Strict validation check
        if (!imageUrl) {
            alert("Please upload a student photo before submitting.");
            return;
        }

        setIsSubmitting(true);

        // Combine form data with the uploaded ImgBB URL
        const data = new FormData(e.target)
        const formData = Object.fromEntries(data.entries())
        const finalSubmissionData = {
            ...formData,
            studentPhoto: imageUrl,
        };

        console.log("Submitted Data:", finalSubmissionData);

        // Simulate API save
        setTimeout(() => {
            alert("Form submitted successfully for Akher Mamud Ideal School!");
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-blue-50 py-10 px-4 flex justify-center items-center">
            <div className="w-full max-w-2xl shadow-xl border border-gray-100">
                <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">
                            Akher Mamud Ideal School
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Student Admission / Information Form</p>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 rounded-full"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Grid Layout for Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Student Name */}
                            <Input
                                isRequired
                                type="text"
                                label="Student Name"
                                required
                                name="studentName"
                                placeholder="Enter full name"
                                variant="bordered"
                                labelPlacement="outside"
                                classNames={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }}
                                startContent={<FaUser className="text-gray-400" />}
                            />

                            {/* Father's Name */}
                            <Input
                                isRequired
                                type="text"
                                label="Father's Name"
                                name="fatherName"
                                placeholder="Enter father's name"
                                variant="bordered"
                                labelPlacement="outside"
                                startContent={<FaUserFriends className="text-gray-400" />}
                            />

                            {/* Mother's Name */}
                            <Input
                                isRequired
                                type="text"
                                label="Mother's Name"
                                name="motherName"
                                placeholder="Enter mother's name"
                                variant="bordered"
                                labelPlacement="outside"
                                classNames={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }}
                                startContent={<FaUserFriends className="text-gray-400" />}
                            />

                            {/* Date of Birth */}
                            <Input
                                isRequired
                                type="date"
                                label="Date of Birth"
                                name="dob"
                                variant="bordered"
                                labelPlacement="outside"
                                classNames={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }}
                                startContent={<FaCalendarAlt className="text-gray-400" />}
                            />

                            {/* Class Name */}
                            <Input
                                isRequired
                                type="text"
                                label="Class Name"
                                name="className"
                                placeholder="e.g., Class 5, Class 8"
                                variant="bordered"
                                labelPlacement="outside"
                                classNames={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }}
                                startContent={<FaGraduationCap className="text-gray-400" />}
                            />

                            {/* Role ID / Roll No */}
                            <Input
                                isRequired
                                type="text"
                                label="Role ID / Roll"
                                required
                                name="roleId"
                                placeholder="Enter identification/roll number"
                                variant="bordered"
                                labelPlacement="outside"
                                classNames={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }}
                                startContent={<FaIdCard className="text-gray-400" />}
                            />

                            {/* Blood Group */}
                            <Select className="w-full"
                                name="Bloud"
                                placeholder="Select Blood Group"
                                classNames={{ label: "text-sm font-semibold text-slate-700", trigger: "text-sm" }}>
                                <Label>Blood Group</Label>

                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        {bloodGroups.map((group) => (
                                            <ListBox.Item
                                                key={group}
                                                id={group}
                                                textValue={group}
                                            >
                                                {group}
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                            <Input
                                isRequired
                                type="number"
                                label="Mobile"
                                required
                                name="mobile"
                                placeholder="Enter Valid mobile Number"
                                variant="bordered"
                                labelPlacement="outside"
                                classNames={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }}
                                startContent={<FaUserFriends className="text-gray-400" />}
                            />

                            {/* Address */}

                            <Input
                                isRequired
                                type="text"
                                label="Address"
                                name="address"
                                placeholder="Enter present address"
                                variant="bordered"
                                labelPlacement="outside"
                                classNames={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }}
                                startContent={<FaMapMarkerAlt className="text-gray-400" />}
                                className="md:col-span-2"
                            />
                        </div>

                        {/* ImgBB Image Upload Section */}
                        <div className="pt-2">
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Student Photo <span className="ml-1 text-red-500" aria-label="required">*</span>
                            </label>
                            <div className="flex items-center gap-4 border-2 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition duration-200">
                                <label className="cursor-pointer flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50">
                                    <FaCloudUploadAlt className="text-blue-500 text-lg" />
                                    Choose File
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                        required
                                    />
                                </label>

                                <div className="flex-1 text-xs text-gray-500 truncate">
                                    {isUploading ? (
                                        <span className="flex items-center gap-2 text-blue-600 font-medium">
                                            <FaSpinner className="animate-spin" /> Uploading to ImgBB...
                                        </span>
                                    ) : imageUrl ? (
                                        <span className="text-green-600 font-medium">✓ Photo linked successfully</span>
                                    ) : imageFile ? (
                                        imageFile.name
                                    ) : (
                                        "No file selected (Max 2MB)"
                                    )}
                                </div>

                                {imageUrl && (
                                    <Image
                                        src={imageUrl}
                                        alt="Preview"
                                        width={100}
                                        height={100}
                                        className="w-12 h-12 object-cover rounded-full border border-gray-200"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            color="primary"
                            className="w-full font-semibold text-white shadow-lg bg-blue-600 hover:bg-blue-700 transition"
                            size="lg"
                            isLoading={isSubmitting || isUploading}
                            isDisabled={isUploading}
                        >
                            Submit Information
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}