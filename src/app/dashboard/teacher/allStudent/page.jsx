import React from 'react';
import StudentTableTeacher from '@/components/StudentTable';
import { studentDataGet } from '@/lib/get';

const AllStudent = async () => {
    const initialStudents = await studentDataGet()
    return (
        <div>
            <StudentTableTeacher initialStudents={initialStudents} />
        </div>
    );
};

export default AllStudent;