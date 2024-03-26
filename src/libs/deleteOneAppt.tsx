import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const deleteOneAppt = async (id:string) => {
    const session = await getServerSession(authOptions);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization":`Bearer ${session?.user?.token}`
        },
        body: JSON.stringify({ 
            id,
        }),
    })
    if(!response.ok) {
        throw new Error("Failed to fetch reservation")
    }
    return await response.json()
}

export default deleteOneAppt