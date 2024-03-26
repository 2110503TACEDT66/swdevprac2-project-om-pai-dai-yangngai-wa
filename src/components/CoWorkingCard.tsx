"use client"

import DateReserve from "@/components/DateReseve"
import { Dayjs } from "dayjs";
import { useState } from "react";
import addAppt from "@/libs/addAppt";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";

export default function CoWorkingCard({ coworking }: { coworking: Coworking }) {
    


    const session = useSession()
    const currentUser = session.data?.user
    console.log("here")
    console.log(session)
    // console.log(userId)

    const [datetime, setDate] = useState<Dayjs|null>(null)
    
    const onsubmit = () => {
        // alert(datetime)
        // console.log(datetime);
        console.log("onSubmit1")
        if(datetime && currentUser){
            console.log("onSubmit2")
            addAppt(datetime.toISOString(),currentUser._id, coworking.id,currentUser.token)

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
                onClick={onsubmit}>
                    RESERVE
                </button>
            </div>
    )
}