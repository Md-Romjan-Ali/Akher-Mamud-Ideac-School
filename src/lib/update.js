const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const updateteacher = async (data, id) => {
    const res = await fetch(`${serverUrl}/api/updateteacher/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}