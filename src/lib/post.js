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