import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"

export default async function getReservations(){

    const session = await getServerSession(authOptions);
        const response = await fetch('https://coworking-space-git-main-swpractice2.vercel.app/api/v1/appointments', {
            method: "GET",
            headers: {
                authorization:`Bearer ${session?.user?.token}`
            },
        })
        
    if(!response.ok) {
        throw new Error("Failed to fetch reservation")
    }
    return await response.json()
}