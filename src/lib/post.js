const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

const postData = async (endpoint, data) => {
    const res = await fetch(`${serverUrl}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}

export const studentDataPost = async (student) => {
    return await postData(`/api/postallstudent`, student)
}
// teacher post
export const teacherPost = async (teacherPayload) => {
    return await postData(`/api/poststudent`, teacherPayload)
}
// teacher routine
export const teacherRoutinePost = async (routinePayload) => {
    return await postData(`/api/postteacherroutine`, routinePayload)
}
// student result
export const studentResultPost = async (resultPayload) => {
   return await postData(`/api/poststudentresult`,resultPayload)
}