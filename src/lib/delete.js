const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
// student
export const deleteStudent = async (id) => {
    const res = await fetch(`${serverUrl}/api/deletestudent/${id}`, {
        method: 'DELETE'
    })
    return res.json()
}
// teacher
export const deleteTeacher = async (id) => {
    const res = await fetch(`${serverUrl}/api/deletestudent/${id}`, {
        method: 'DELETE',
    })
    return res.json()
}