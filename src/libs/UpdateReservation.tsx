export default async function UpdateReservation(apptDate:string,token:string,appId:string ){
    await new Promise((resolve)=>setTimeout(resolve, 1000))
    console.log("updateappt Here")
    console.log("token :", token)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments/${appId}`
    console.log("url: ",url)
    const response = await fetch(url,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "authorization":`Bearer ${token}`
        },
        body: JSON.stringify({ 
            apptDate:apptDate ,
        }),
    });
    // if(!response.ok) {
    //     throw new Error("Failed to add appt")
    // }
    const body = await response.json()
    console.log("update appt : " , body)
    return body
}