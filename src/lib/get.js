const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
export const studentDataGet = async () => {
    const res = await fetch(`${serverUrl}/api/getstudent`)
    return res.json()
}
//  get data by id
export const getDataById = async (id) => {
    const res = await fetch(`${serverUrl}/api/getstudent/${id}`)
    return res.json()
}