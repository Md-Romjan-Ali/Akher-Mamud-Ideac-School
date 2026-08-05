const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
// user
export const getuser = async () => {
    const res = await fetch(`${serverUrl}/api/alluser`, {
        cache: 'no-store'
    })
    return res.json()
}
// student
export const studentDataGet = async () => {
    const res = await fetch(`${serverUrl}/api/getstudent`, {
        cache: 'no-store'
    })
    return res.json()
}
//  get data by id
export const getDataById = async (id) => {
    const res = await fetch(`${serverUrl}/api/getstudent/${id}`)
    return res.json()
}

// get teacher data
export const getTeacherData = async () => {
    const res = await fetch(`${serverUrl}/api/getteacher`, {
        cache: 'no-store'
    })
    return res.json()
}
export const getTeacherByid = async (id) => {
    const res = await fetch(`${serverUrl}/api/teacherdetails/${id}`)
    return res.json()
}
// teacher routine
export const getTeacherRoutine = async (teacherEmail) => {
    const res = await fetch(`${serverUrl}/api/getteacherroutine?teacherEmail=${teacherEmail}`, {
        cache: 'no-store'
    })
    return res.json()
}
// student result
export const getStudentResult = async (studentEmail) => {
    const res = await fetch(`${serverUrl}/api/studentresult?email=${studentEmail}`, {
        cache: 'no-store',
    })
    return res.json()
}