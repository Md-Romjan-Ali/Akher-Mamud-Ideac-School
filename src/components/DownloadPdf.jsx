"use client"

import { FiDownload } from "react-icons/fi";

const DownloadPdf = () => {
    const downloadPDF = () => {
        window.print();
    };
    return (
        <div>
            <button
                onClick={downloadPDF}
                className="inline-flex print:hidden items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                <FiDownload size={18} />
                Download PDF
            </button>
        </div>
    );
};

export default DownloadPdf;