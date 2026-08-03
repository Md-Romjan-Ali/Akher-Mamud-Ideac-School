import React from 'react';
import TeacherClassSchedule from './MyClass';
import { getTeacherRoutine } from '@/lib/get';
import { userSession } from '@/lib/session';

const MYClassPage = async () => {
    const user = await userSession()
    const teacherEmail = user?.email
    const scheduleData = await getTeacherRoutine(teacherEmail)
    console.log(scheduleData)
    return (
        <div>
            <TeacherClassSchedule scheduleData={scheduleData} />
        </div>
    );
};

export default MYClassPage;