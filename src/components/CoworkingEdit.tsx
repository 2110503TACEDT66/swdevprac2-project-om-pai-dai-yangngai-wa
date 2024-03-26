"use client"

import DateReserve from "@/components/DateReseve"
import { Dayjs } from "dayjs";
import { useState } from "react";
import addAppt from "@/libs/addAppt";
import { useSession } from "next-auth/react";
import { redirect, useParams, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";
import UpdateReservation from "@/libs/UpdateReservation";

export default function CoworkingEdit({ coworking}: { coworking: Coworking}) {
    


    const session = useSession()
    const currentUser = session.data?.user
    console.log("here")
    console.log(session)
    // console.log(userId)

    const [datetime, setDate] = useState<Dayjs|null>(null)

    const urlParams = useSearchParams()
    const aid = urlParams.get('id')
    const router = useRouter();
    
    const onsubmit = () => {
        // alert(datetime)
        // console.log(datetime);
        console.log("onSubmit1")
        if(datetime && currentUser && aid){
            console.log("onSubmit2")
            UpdateReservation(datetime.toISOString(), currentUser.token, aid)
        }
    }
    return (
        <div className=" w-10/12 space-y-10 h-full p-10 bg-white rounded-md flex flex-col">
                <div className=" flex flex-col space-y-3">
                    <h1 className=" font-bold text-xl">
                        Name
                    </h1>
                    <h1 className=" font-semibold text-xl border-2 p-3 rounded-md border-gray-300">
                        {coworking.name}
                    </h1>
                </div>
                <div className=" flex flex-row w-full space-x-10">
                    <div className=" flex flex-col space-y-3 w-1/2">
                        <h1 className=" font-bold text-xl">
                            Date-Time
                        </h1>
                        <DateReserve onChangeDate={(value : Dayjs)=>setDate(value)} />
                    </div>
                </div>
                <button className= "bg-main-100 text-white py-3 rounded-md font-semibold"
                onClick={()=>{onsubmit(); router.push('/history');}}>
                    RESERVE
                </button>
            </div>
    )
}