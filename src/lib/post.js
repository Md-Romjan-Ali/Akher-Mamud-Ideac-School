const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
export const studentDataPost = async (student) => {
    const res = await fetch(`${serverUrl}/api/postallstudent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    return res.json()
}
// teacher post
export const teacherPost = async (teacherPayload) => {
    const res = await fetch(`${serverUrl}/api/poststudent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(teacherPayload)
    })
    return res.json()
}
// teacher routine
export const teacherRoutinePost = async (routinePayload) => {
    const res = await fetch(`${serverUrl}/api/postteacherroutine`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(routinePayload)
    })
    return res.json()
}
// student result
export const studentResultPost = async (resultPayload) => {
    const res = await fetch(`${serverUrl}/api/poststudentresult`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultPayload)
    })
    return res.json()
}