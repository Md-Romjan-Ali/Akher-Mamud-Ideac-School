'use client';

import React, { useState } from 'react';
import { FaChalkboardTeacher, FaSearch, FaTrashAlt, FaUser, FaUserShield } from 'react-icons/fa';
import { FaCheck, FaUsers } from 'react-icons/fa6';

// Initial Mock User Data
const initialUsers = [
    { id: 1, name: 'Md. Ramzan Ali', email: 'ramzan@school.edu', role: 'student' },
    { id: 2, name: 'Prof. Alex Morgan', email: 'alex.morgan@school.edu', role: 'teacher' },
    { id: 3, name: 'Sarah Jenkins', email: 'sarah.j@school.edu', role: 'admin' },
    { id: 4, name: 'Dr. Robert Chen', email: 'robert.chen@school.edu', role: 'teacher' },
    { id: 5, name: 'Maria Garcia', email: 'maria.garcia@school.edu', role: 'student' },
    { id: 6, name: 'David Wilson', email: 'david.w@school.edu', role: 'student' },
    { id: 7, name: 'Anisur Rahman', email: 'anisur@school.edu', role: 'teacher' },
    { id: 8, name: 'Fatima Zahra', email: 'fatima.z@school.edu', role: 'admin' },
];

export default function UserManagementTable() {
    const [users, setUsers] = useState(initialUsers);
    const [searchQuery, setSearchQuery] = useState('');
    const [updatedId, setUpdatedId] = useState(null);

    // Handle Role Change
    const handleRoleChange = (userId, newRole) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === userId ? { ...user, role: newRole } : user
            )
        );

        // Briefly show a success indicator
        setUpdatedId(userId);
        setTimeout(() => setUpdatedId(null), 2000);
    };

    // Handle User Deletion
    const handleDeleteUser = (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            setUsers((prev) => prev.filter((user) => user.id !== userId));
        }
    };

    // Filter Users by Search Input
    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Role Badge Icon Helper
    const getRoleIcon = (role) => {
        switch (role) {
            case 'admin':
                return <FaUserShield className="text-purple-500" />;
            case 'teacher':
                return <FaChalkboardTeacher className="text-indigo-500" />;
            default:
                return <FaUser className="text-emerald-500" />;
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans space-y-6">

            {/* Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                        <FaUsers className="text-indigo-600" /> User Directory & Roles
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Manage system permissions, update user roles, or delete user accounts.
                    </p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 self-start md:self-auto">
                    Total Users: <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">{users.length}</span>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                    type="text"
                    placeholder="Search by name, email, or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm shadow-sm transition-all"
                />
            </div>

            {/* Users Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">

                        {/* Table Header */}
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                                <th className="py-4 px-6">User Details</th>
                                <th className="py-4 px-6">Email Address</th>
                                <th className="py-4 px-6">Current Role</th>
                                <th className="py-4 px-6">Select Role (Update)</th>
                                <th className="py-4 px-6 text-center">Action</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200 text-sm">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                                    >

                                        {/* Name */}
                                        <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-100 dark:border-indigo-900">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <span>{user.name}</span>
                                            </div>
                                        </td>

                                        {/* Email */}
                                        <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                                            {user.email}
                                        </td>

                                        {/* Current Role Badge */}
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold capitalize bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                {getRoleIcon(user.role)}
                                                {user.role}
                                            </span>
                                        </td>

                                        {/* Select Role Dropdown */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <select
                                                    value={user.role}
                                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                                    className="bg-gray-800 dark:bg-slate-800 border border-slate-200 dark:border-slate-700  dark:text-slate-200 text-xs font-semibold rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer capitalize transition-all"
                                                >
                                                    <option value="student">Student</option>
                                                    <option value="teacher">Teacher</option>
                                                    <option value="admin">Admin</option>
                                                </select>

                                                {/* Success Feedback Icon */}
                                                {updatedId === user.id && (
                                                    <span className="text-emerald-500 text-xs font-bold flex items-center gap-1 animate-fade-in">
                                                        <FaCheck /> Saved
                                                    </span>
                                                )}
                                            </div>
                                        </td>

                                        {/* Delete Action */}
                                        <td className="py-4 px-6 text-center">
                                            <button
                                                onClick={() => handleDeleteUser(user.id)}
                                                className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all"
                                                title="Delete User"
                                            >
                                                <FaTrashAlt className="text-base" />
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-10 text-slate-400">
                                        No users found matching {searchQuery}.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 dark:bg-slate-800/40 px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <p>Displaying {filteredUsers.length} user records</p>
                    <p>Roles: Student | Teacher | Admin</p>
                </div>
            </div>
        </div>
    );
}