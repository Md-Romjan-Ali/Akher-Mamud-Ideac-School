import DisplayProfile from '@/components/DisplayProfile';
import { userSession } from '@/lib/session';
import React from 'react';

const AdminProfile = async () => {
    const user = await userSession()
    return (
        <div>
            <DisplayProfile user={user} />
        </div>
    );
};

export default AdminProfile;