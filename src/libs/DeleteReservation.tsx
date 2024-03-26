export default async function DeleteReservation(token:string,appId:string ){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments/${appId}`
    console.log("url: ",url)
    const response = await fetch(url,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "authorization":`Bearer ${token}`
        },
        body: JSON.stringify({ 
            id:appId ,
        }),
    });
    if(!response.ok) {
        throw new Error("Failed to add appt")
    }
    const body = await response.json()
    console.log("delete appt : " , body)
    
    return body
}