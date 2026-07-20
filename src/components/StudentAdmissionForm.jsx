"use client";
import { Input, Select, Button, ListBox, Label } from "@heroui/react";
import {

    FaCloudUploadAlt,
    FaSpinner,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { studentDataPost } from "@/lib/post";

export default function StudentAdmissionForm() {
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImageFile(file);
        setIsUploading(true);

        const imageData = new FormData();
        imageData.append("image", file);
        const IMGBB_API_KEY = "c5b005b2b94cfb2801454c3f6b665254";

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: "POST",
                body: imageData,
            });

            const result = await response.json();

            if (result.success) {
                setImageUrl(result.data.url);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!imageUrl) {
            alert("Please upload a student photo before submitting.");
            return;
        }

        setIsSubmitting(true);

        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries());
        const student = {
            ...formData,
            studentPhoto: imageUrl,
        };

        const post = await studentDataPost(student);
        console.log("Submitted Data:", post);
        setIsSubmitting(false)
    };

    return (
        <div className="min-h-screen bg-blue-50 px-4 py-10 flex justify-center items-center">
            <div className="w-full max-w-2xl shadow-xl border border-gray-100">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">
                            Akher Mamud Ideal School
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Student Admission / Information Form</p>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 rounded-full"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="text" label="Student Name" required name="studentName" placeholder="Enter full name" variant="bordered" className={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }} />
                            <Input type="text" label="Father's Name" name="fatherName" placeholder="Enter father's name" variant="bordered" />
                            <Input type="text" label="Mother's Name" name="motherName" placeholder="Enter mother's name" variant="bordered" className={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }} />
                            <Input type="date" label="Date of Birth" name="dob" variant="bordered" className={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }} />
                            <Input type="text" label="Class Name" name="className" placeholder="e.g., Class 5, Class 8" variant="bordered" className={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }} />
                            <Input type="text" label="Role ID / Roll" required name="roleId" placeholder="Enter identification/roll number" variant="bordered" className={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }} />
                            <Select name="Bloud" placeholder="Select Blood Group" className={{ label: "text-sm font-semibold text-slate-700", trigger: "text-sm" }}>
                                <Label>Blood Group</Label>
                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        {bloodGroups.map((group) => (
                                            <ListBox.Item key={group} id={group} textValue={group}>
                                                {group}
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                            <Input type="number" label="Mobile" required name="mobile" placeholder="Enter Valid mobile Number" variant="bordered" className={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }} />
                            <Input type="text" label="Address" name="address" placeholder="Enter present address" variant="bordered" className={{ label: "text-sm font-semibold text-slate-700", input: "text-sm" }} />
                        </div>

                        <div className="pt-2">
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Student Photo <span className="ml-1 text-red-500" aria-label="required">*</span>
                            </label>
                            <div className="flex items-center gap-4 border-2 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition duration-200">
                                <label className="cursor-pointer flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50">
                                    <FaCloudUploadAlt className="text-blue-500 text-lg" />
                                    Choose File
                                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} required />
                                </label>

                                <div className="flex-1 text-xs text-gray-500 truncate">
                                    {isUploading ? (
                                        <span className="flex items-center gap-2 text-blue-600 font-medium">
                                            <FaSpinner className="animate-spin" /> Uploading to ImgBB...
                                        </span>
                                    ) : imageUrl ? (
                                        <span className="text-green-600 font-medium">✓ Photo linked successfully</span>
                                    ) : imageFile ? (
                                        <span className="text-yellow-600 font-medium">Please wait...</span>
                                    ) : (
                                        <span>Upload a clear student photo (JPG/PNG)</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" className="px-8 py-3" isLoading={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Admission"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
