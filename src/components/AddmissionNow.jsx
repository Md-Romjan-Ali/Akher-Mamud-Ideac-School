"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiUserPlus } from "react-icons/fi";
import Link from "next/link";
export default function AddmissionNow() {

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
            <Link href={'/roleandregulation'}>
                <motion.button
                    animate={{
                        scale: [1, 1.08, 1, 1.08, 1],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 4,
                    }}
                    className="group flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3.5 px-4 sm:px-5 rounded-r-2xl shadow-2xl border-y border-r border-white/20 backdrop-blur-sm cursor-pointer"

                >

                    <FiUserPlus className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm sm:text-base font-medium tracking-wide drop-shadow-sm">
                        Enroll Now
                    </span>
                </motion.button>
            </Link>
        </div>
    );
}