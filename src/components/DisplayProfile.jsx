
// Utilizing clean, compact HeroUI v3.2.2 primitives
import { Avatar } from "@heroui/react";
import { FiEdit3 } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function DisplayProfile({ user }) {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20 flex items-center justify-center p-4 space-y-3">
            {/* Main Profile Container Card Layout */}
            <div className="w-full max-w-md bg-white border border-slate-100 shadow-xl rounded-2xl overflow-hidden p-6 text-center flex flex-col items-center">

                {/* Dynamic User Avatar */}
                <Image
                    className="transition-transform rounded-xl border-blue-500 w-25 h-25 cursor-pointer"
                    alt={user?.name || "User"}
                    src={user?.image}
                    width={400}
                    height={400}

                />

                {/* Dynamic User Name Information */}
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">
                    {user?.name || "Anonymous User"}
                </h1>

                {/* Dynamic User Email Information */}
                <p className="text-sm font-medium text-slate-400 mt-1 mb-6">
                    {user?.email}
                </p>
                <p className="text-sm font-medium bg-blue-500/20 text-blue-600 rounded-2xl px-3 py-1.5 mt-1 mb-6">
                    {user?.role}
                </p>

                {/* Primary Action Button Element */}
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 py-3 shadow-md shadow-slate-900/10 active:scale-[0.99] transition-all">
                    <FiEdit3 className="text-base" />
                    <span>Edit Profile</span>
                </Button>

            </div>
        </div>
    );
}