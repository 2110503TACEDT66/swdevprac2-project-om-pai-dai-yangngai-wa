export default async function addAppt(apptDate:string,user:string,cid:string,token:string ){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/coworkings/${cid}/appointments`
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
    const body = await response.json()
    return body
}