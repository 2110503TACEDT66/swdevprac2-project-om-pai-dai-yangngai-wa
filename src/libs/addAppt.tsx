export default async function addAppt(apptDate:string,user:string,cid:string,token:string ){
    console.log("addappt Here")
    console.log("token :", token)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/coworkings/${cid}/appointments`
    console.log("url: ",url)
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "authorization":`Bearer ${token}`
        },
        body: JSON.stringify({ 
            apptDate:apptDate ,
            user : user
        }),
    });
    // if(!response.ok) {
    //     throw new Error("Failed to add appt")
    // }
    const body = await response.json()
    console.log("add appt : " , body)
    return body
}