import React from 'react';
import Link from 'next/link';
import { getEarnAndCostData } from '@/lib/get';
import { 
  FaArrowLeft, 
  FaArrowUp, 
  FaArrowDown, 
  FaCalendarAlt, 
  FaHashtag, 
  FaWallet, 
  FaCheckCircle 
} from 'react-icons/fa';

const DetailsAboutEarnAndCost = async () => {
  // Fetch dynamic data from your API/database helper
  const postEarnAndCostData = await getEarnAndCostData();
  console.log(postEarnAndCostData, 'from social');

  // Handle case where data might be null, undefined, or empty
  const dataList = Array.isArray(postEarnAndCostData) ? postEarnAndCostData : [];

  // Calculate Total Earnings, Total Costs, and Net Balance
  const totalEarn = dataList
    .filter((item) => item.earn)
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const totalCost = dataList
    .filter((item) => !item.earn)
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const netBalance = totalEarn - totalCost;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Top Header & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/dashboard/admin/earn"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150 active:scale-95 w-fit"
          >
            <FaArrowLeft className="text-slate-400" />
            <span>Back to Dashboard</span>
          </Link>

          <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FaWallet className="text-indigo-600" /> Earn & Cost Details
          </h1>
        </div>

        {/* Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Total Earn */}
          <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <FaArrowUp className="text-emerald-500" /> Total Earn
            </p>
            <p className="mt-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              ৳{totalEarn.toLocaleString('en-US')}
            </p>
          </div>

          {/* Total Cost */}
          <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <FaArrowDown className="text-rose-500" /> Total Expense
            </p>
            <p className="mt-2 text-2xl font-bold text-rose-600 dark:text-rose-400">
              ৳{totalCost.toLocaleString('en-US')}
            </p>
          </div>

          {/* Net Balance */}
          <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <FaWallet className="text-indigo-500" /> Net Balance
            </p>
            <p className={`mt-2 text-2xl font-bold ${netBalance >= 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-600 dark:text-rose-400'}`}>
              ৳{netBalance.toLocaleString('en-US')}
            </p>
          </div>
        </div>

        {/* Financial List Cards */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            All Records ({dataList.length})
          </h2>

          {dataList.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-400">
              No earning or cost records found.
            </div>
          ) : (
            dataList.map((item) => {
              const isEarn = item.earn;
              const formattedAmount = Number(item.amount || 0).toLocaleString('en-US');
              const formattedDate = item.createdAt 
                ? new Date(item.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : 'N/A';

              return (
                <div
                  key={item._id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-5 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Left: Icon & Details */}
                    <div className="flex items-start gap-3.5">
                      <div className={`p-3 rounded-xl shadow-xs shrink-0 ${
                        isEarn ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                      }`}>
                        {isEarn ? <FaArrowUp size={18} /> : <FaArrowDown size={18} />}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 capitalize">
                            {item.title}
                          </h3>
                          <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                            isEarn
                              ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400'
                              : 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400'
                          }`}>
                            {isEarn ? 'Income' : 'Cost'}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap pt-0.5">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt size={11} className="text-indigo-500" /> {formattedDate}
                          </span>
                         
                        </div>
                      </div>
                    </div>

                    {/* Right: Amount */}
                    <div className="text-left sm:text-right shrink-0">
                      <p className={`text-xl font-extrabold ${
                        isEarn ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                      }`}>
                        {isEarn ? '+' : '-'} ৳{formattedAmount}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};

export default DetailsAboutEarnAndCost;