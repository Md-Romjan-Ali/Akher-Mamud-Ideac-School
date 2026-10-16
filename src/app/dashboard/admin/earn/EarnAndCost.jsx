"use client"
import DownloadPdf from "@/components/DownloadPdf";
import { earnAndCostPost } from "@/lib/post";
import React, { useState } from "react";

export default function SchoolFinanceSummary() {
    const [earn, setEarn] = useState(true);
    const handleSubmit =async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        const postData = {
            ...data,
            earn
        }
        const postEarnAndCostData= await earnAndCostPost(postData)
        console.log(postEarnAndCostData, 'from earn and cost');
    }

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
                            total- 0
                        </span>
                    </div>

                    {/* Total Costs */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            Total School Expense
                        </span>
                        <span className="text-2xl font-extrabold text-rose-600">
                            total- 0
                        </span>
                    </div>
                </div>

                {/* --- OVERALL PROFIT / LOSS BANNER --- */}
                <div className={`p-6 rounded-2xl border text-center shadow-sm bg-rose-50/60 border-rose-200`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Net Financial Status
                    </span>

                    <div className={`text-3xl font-black text-emerald-700 text-rose-700"}`}>

                    </div>

                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs"bg-rose-100 text-rose-800`}>
                        dsf
                    </span>
                </div>

                {/* --- ADD NEW ACCOUNT ENTRY FORM --- */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">Add School Entry</h2>

                    {/* Type Switcher */}
                    <div className="grid grid-cols-2 gap-2">
                        <button
                        onClick={()=>setEarn(!earn)}
                        className={`py-2 text-xs font-bold rounded-xl border transition ${earn ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                        >
                            + Fee / Income
                        </button>
                        <button
                        onClick={()=>setEarn(!earn)}
                            className={`py-2 text-xs font-bold rounded-xl border transition ${!earn ? 'bg-rose-500 text-white' : 'bg-white text-rose-500'}`}
                        >
                            - Expense / Cost
                        </button>
                    </div>
                <form onSubmit={handleSubmit}>
                   

                    <input
                        placeholder="Entry Title (e.g. Admission Fees, Electricity Bill)"
                        name="title"
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        placeholder="Amount"
                        name="amount"
                        className="w-full my-3 px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shadow-md"
                    >
                        Update School Total
                    </button>
                </form>
                </div>
               

                <DownloadPdf />
            </div>
        </div>
    );
}