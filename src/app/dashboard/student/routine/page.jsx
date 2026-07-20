import React from 'react';

const RoutinePage = () => {
    return (
        <div>

            <div className="max-w-6xl mx-auto p-6 bg-white text-black">
                <div className="border-2 border-gray-800 p-6 rounded-lg">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold uppercase">
                            Akher Mamud Ideal School
                        </h1>
                        <p className="text-lg font-semibold mt-2">
                            Weekly Class Routine
                        </p>
                        <p className="text-gray-600">
                            Class: Eight | Section: A | Academic Year: 2026
                        </p>
                    </div>

                    <table className="w-full border-collapse border border-gray-700 text-center">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="border border-gray-700 p-3">Time</th>
                                <th className="border border-gray-700 p-3">Saturday</th>
                                <th className="border border-gray-700 p-3">Sunday</th>
                                <th className="border border-gray-700 p-3">Monday</th>
                                <th className="border border-gray-700 p-3">Tuesday</th>
                                <th className="border border-gray-700 p-3">Wednesday</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border p-3 font-semibold">09:00 - 09:45</td>
                                <td className="border p-3">Bangla</td>
                                <td className="border p-3">English</td>
                                <td className="border p-3">Mathematics</td>
                                <td className="border p-3">Science</td>
                                <td className="border p-3">ICT</td>
                            </tr>

                            <tr>
                                <td className="border p-3 font-semibold">09:45 - 10:30</td>
                                <td className="border p-3">English</td>
                                <td className="border p-3">Bangla</td>
                                <td className="border p-3">Science</td>
                                <td className="border p-3">Mathematics</td>
                                <td className="border p-3">Religion</td>
                            </tr>

                            <tr>
                                <td className="border p-3 font-semibold">10:30 - 11:15</td>
                                <td className="border p-3">Science</td>
                                <td className="border p-3">ICT</td>
                                <td className="border p-3">English</td>
                                <td className="border p-3">Bangla</td>
                                <td className="border p-3">Social Science</td>
                            </tr>

                            <tr className="bg-yellow-100">
                                <td colSpan={6} className="border p-3 font-bold">
                                    Break (11:15 - 11:45)
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-3 font-semibold">11:45 - 12:30</td>
                                <td className="border p-3">Mathematics</td>
                                <td className="border p-3">Religion</td>
                                <td className="border p-3">ICT</td>
                                <td className="border p-3">English</td>
                                <td className="border p-3">Bangla</td>
                            </tr>

                            <tr>
                                <td className="border p-3 font-semibold">12:30 - 01:15</td>
                                <td className="border p-3">ICT</td>
                                <td className="border p-3">Mathematics</td>
                                <td className="border p-3">Religion</td>
                                <td className="border p-3">Social Science</td>
                                <td className="border p-3">Science</td>
                            </tr>

                            <tr>
                                <td className="border p-3 font-semibold">01:15 - 02:00</td>
                                <td className="border p-3">Social Science</td>
                                <td className="border p-3">Science</td>
                                <td className="border p-3">Bangla</td>
                                <td className="border p-3">ICT</td>
                                <td className="border p-3">Mathematics</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-8 flex justify-between">
                        <div className="text-center">
                            <div className="border-t border-gray-700 w-40 mx-auto"></div>
                            <p className="mt-2 font-semibold">Class Teacher</p>
                        </div>

                        <div className="text-center">
                            <div className="border-t border-gray-700 w-40 mx-auto"></div>
                            <p className="mt-2 font-semibold">Head Teacher</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoutinePage;