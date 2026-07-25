"use client";

import { useEffect, useState } from "react";

export default function OfficeTimer() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Bangladesh Time
    const bdNow = new Date(
        now.toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
        })
    );

    const currentHour = bdNow.getHours();
    const currentMinute = bdNow.getMinutes();
    const currentSecond = bdNow.getSeconds();

    const currentTime =
        currentHour * 3600 + currentMinute * 60 + currentSecond;

    const startTime = 10 * 3600 + 30 * 60; // 10:30 AM
    const endTime = 15 * 3600; // 3:00 PM

    const officeDuration = endTime - startTime;

    let progress = 0;
    let title = "";
    let description = "";
    let color = "bg-green-500";
    let badgeColor = "bg-green-100 text-green-700";

    function format(sec) {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;

        return `${String(h).padStart(2, "0")}h ${String(m).padStart(
            2,
            "0"
        )}m ${String(s).padStart(2, "0")}s`;
    }

    // BEFORE OPEN
    if (currentTime < startTime) {
        progress = (currentTime / startTime) * 100;

        const remaining = startTime - currentTime;

        title = "🔴 Office Closed";
        description = `Opens in ${format(remaining)}`;

        color = "bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white";
        badgeColor = "bg-red-100 text-red-700";
    }

    // OFFICE OPEN
    else if (currentTime <= endTime) {
        progress =
            ((currentTime - startTime) / officeDuration) * 100;

        const remaining = endTime - currentTime;

        title = "🟢 Office Open";
        description = `${format(remaining)} remaining`;

        color = "bg-green-500";
        badgeColor = "bg-green-100 text-green-700";
    }

    // AFTER OFFICE
    else {
        progress = 100;

        const tomorrow = 24 * 3600 - currentTime + startTime;

        title = "🌙 Office Closed";
        description = `Opens tomorrow in ${format(tomorrow)}`;

        color = "bg-blue-500";
        badgeColor = "bg-blue-100 text-blue-700";
    }

    return (
        <div className="bg-blue-50">
            <div className="max-w-7xl mx-auto md:flex items-center justify-center gap-5 rounded-2xl border bg-white shadow-lg p-1">
                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor}`}
                >
                    {title}
                </span>
                {/* Office Time */}
                <div className="flex-1">
                    {/* Progress */}
                    <div className="relative h-5 rounded-full bg-gray-200 flex items-center overflow-hidden">

                        <div
                            className={`${color} h-full transition-all duration-1000`}
                            style={{
                                width: `${progress}%`,
                            }}
                        />

                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                            {progress.toFixed(0)}%
                        </div>

                    </div>
                </div>


                {/* Status */}
                <div className="text-center">

                    <p className="text-lg font-semibold">
                        {description}
                    </p>

                </div>
            </div>
        </div>
    );
}