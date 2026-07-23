import AllTeacherPage from '@/components/AllTeacherPage';
import { getTeacherData } from '@/lib/get';
import React from 'react';

const AllTeacher = async () => {
    const teachers = await getTeacherData()
    return (
        <div>
            <AllTeacherPage teachers={teachers} />
        </div>
    );
};

export default AllTeacher;