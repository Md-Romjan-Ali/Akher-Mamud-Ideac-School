import { Sidebar } from '@/components/SideBar';
import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div className='flex gap-2'>
            <div>
                <Sidebar />
            </div>
            <div className='flex-1'>
                {children}
            </div>

        </div>
    );
};

export default AdminLayout;