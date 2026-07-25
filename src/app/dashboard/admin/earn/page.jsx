"use client"
import DownloadPdf from "@/components/DownloadPdf";
import React, { useState } from "react";

export default function SchoolFinanceSummary() {
    // Initial demo data for school finances
    const [records, setRecords] = useState([
        { id: 1, title: "Student Tuition & Term Fees", amount: 15000, type: "income" },
        { id: 2, title: "Teacher & Staff Payroll", amount: 8500, type: "cost" },
        { id: 3, title: "Lab & Campus Maintenance", amount: 1200, type: "cost" },
        { id: 4, title: "Admission & Form Fees", amount: 3200, type: "income" },
    ]);

    // Form input states
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("income");

    // 1. Calculate Total School Income
    const totalEarn = records
        .filter((r) => r.type === "income")
        .reduce((sum, r) => sum + r.amount, 0);

    // 2. Calculate Total School Expenses
    const totalCost = records
        .filter((r) => r.type === "cost")
        .reduce((sum, r) => sum + r.amount, 0);

    // 3. Calculate Overall Result (Profit or Loss)
    const netBalance = totalEarn - totalCost;
    const isProfit = netBalance >= 0;

    // Handler to record new financial entry
    const handleAddRecord = (e) => {
        e.preventDefault();
        if (!title || !amount) return;

        setRecords([
            {
                id: Date.now(),
                title,
                amount: parseFloat(amount),
                type,
            },
            ...records,
        ]);

        setTitle("");
        setAmount("");
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-6 flex flex-col items-center justify-center font-sans text-slate-800">
            <div className="w-full max-w-lg space-y-6">

                {/* --- SCHOOL HEADER --- */}
                <div className="text-center">
                    <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        School Accounts Overview
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Overall financial summary & balance calculation
                    </p>
                </div>

                {/* --- TOTAL CARDS --- */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Total Earnings */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            Total Revenue / Fees
                        </span>
                        <span className="text-2xl font-extrabold text-emerald-600">
                            ${totalEarn.toLocaleString()}
                        </span>
                    </div>

                    {/* Total Costs */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            Total School Expense
                        </span>
                        <span className="text-2xl font-extrabold text-rose-600">
                            ${totalCost.toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* --- OVERALL PROFIT / LOSS BANNER --- */}
                <div className={`p-6 rounded-2xl border text-center shadow-sm ${isProfit
                    ? "bg-emerald-50/60 border-emerald-200"
                    : "bg-rose-50/60 border-rose-200"
                    }`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Net Financial Status
                    </span>

                    <div className={`text-3xl font-black ${isProfit ? "text-emerald-700" : "text-rose-700"}`}>
                        ${Math.abs(netBalance).toLocaleString()}
                    </div>

                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide ${isProfit
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-rose-100 text-rose-800"
                        }`}>
                        {isProfit ? "Surplus / Profit" : "Deficit / Loss"}
                    </span>
                </div>

                {/* --- ADD NEW ACCOUNT ENTRY FORM --- */}
                <form onSubmit={handleAddRecord} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">Add School Entry</h2>

                    {/* Type Switcher */}
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="button"
                            onClick={() => setType("income")}
                            className={`py-2 text-xs font-bold rounded-xl border transition ${type === "income"
                                ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            + Fee / Income
                        </button>
                        <button
                            type="button"
                            onClick={() => setType("cost")}
                            className={`py-2 text-xs font-bold rounded-xl border transition ${type === "cost"
                                ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            - Expense / Cost
                        </button>
                    </div>

                    <input
                        type="text"
                        placeholder="Entry Title (e.g. Admission Fees, Electricity Bill)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shadow-md"
                    >
                        Update School Total
                    </button>
                </form>
                <DownloadPdf />
            </div>
        </div>
    );
}