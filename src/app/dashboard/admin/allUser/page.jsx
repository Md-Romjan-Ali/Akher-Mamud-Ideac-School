import UserManagementTable from '@/components/UserTable';
import { getuser } from '@/lib/get';
import React from 'react';

const UserPage = async () => {
    const initialUsers = await getuser()
    return (
        <div>
            <UserManagementTable initialUsers={initialUsers} />
        </div>
    );
};

export default UserPage;