import { Sidebar } from '@/components/SideBar';
import { Spinner } from '@heroui/react';
import React, { Suspense } from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div className='flex gap-2'>
            <div>
                <Suspense fallback={<div className="w-52 mx-auto flex justify-center items-center min-h-screen">
                    <Spinner color="current" />
                </div>}>
                    <Sidebar />
                </Suspense>
            </div>
            <div className='flex-1'>
                {children}
            </div>

        </div>
    );
};

export default AdminLayout;