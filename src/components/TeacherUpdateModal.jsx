"use client";

import { updateteacher } from "@/lib/update";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { HiOutlineBookOpen, HiOutlineUser } from "react-icons/hi2";

export function TeacherUpdate({ teacher }) {
    const router = useRouter()
    const id = teacher._id
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const update = await updateteacher(data, id)
        console.log(update, data);
        router.refresh()
        toast.success("update Data succefully")
    }
    return (
        <Modal>
            <Button className={'flex items-center gap-1'}>  <FaEdit />Edith</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Rocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>A M I School</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit} className="p-8 space-y-6">

                                {/* Section 1: Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="text-md font-semibold text-slate-800 border-b pb-2 border-slate-100 flex items-center gap-2">
                                        <HiOutlineUser className="text-blue-600" /> Personal Information
                                    </h3>

                                    <div className="space-y-3">
                                        {/* Teacher Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                Teacher Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="teacherName"
                                                defaultValue={teacher?.teacherName}
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
                                                defaultValue={teacher?.nationalId}
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
                                                defaultValue={teacher?.fatherName}
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
                                                defaultValue={teacher?.motherName}
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
                                                defaultValue={teacher?.phone}
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
                                            defaultValue={teacher?.address}
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

                                    <div className="space-y-3">
                                        {/* Education Level (Text) */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                Education Level <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="educationLevel"
                                                defaultValue={teacher?.educationLevel}
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
                                                defaultValue={teacher?.subjectForJoin}
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
                                                defaultValue={teacher?.joinDate}
                                                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                                                type="date" />
                                        </div>
                                    </div>
                                </div>



                                {/* Submit Action */}
                                <div className="pt-4">
                                    <button
                                        type="submit"

                                        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        Save
                                    </button>
                                </div>

                            </form>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}