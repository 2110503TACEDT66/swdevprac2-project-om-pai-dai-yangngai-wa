"use client"

import DateReserve from "@/components/DateReseve"
import { Dayjs } from "dayjs";
import { useState } from "react";
import getCoworking from "@/libs/getCoworking"; 

export default async function Page({params} : {params : {id : string}}){


    const [date, setDate] = useState<Dayjs|null>(null)
    const [time, setTime] = useState<string>("")

    const mockData : Coworking[] = [
        {
            id : "1",
            name : "Coworking Space 1",
            address : "1234/5",
            district : "Bangrak",
            province : "Bangkok",
            postalcode : "10500",
            tel : "02 123 4567",
            price_hourly : 100,
            opentime : "09:00",
            closetime : "18:00"
        },
        {
            id : "2",
            name : "C asean Samyan CO-OP",
            address : "1583 Rama IV Rd, Wang Mai",
            district : "Pathum Wan",
            province : "Bangkok",
            postalcode : "10330",
            tel : "02 219 6999",
            price_hourly : 100,
            opentime : "06:00",
            closetime : "4:30"
        },
    
    ]

    const data : Coworking | undefined = mockData.find((coworking) => coworking.id === params.id)

    // const handlerSubmit = () => {
    //     if(coworkingDetail && coworkingDetail.name && date && time){
    //         console.log("Submit")
    //     }
    // }

    

    return(
        <main className=" min-h-[90vh]  flex justify-center items-center bg-main-100">
            <div className=" w-10/12 space-y-10 h-full p-10 bg-white rounded-md flex flex-col">
                <div className=" flex flex-col space-y-3">
                    <h1 className=" font-bold text-xl">
                        Name
                    </h1>
                    <h1 className=" font-semibold text-xl border-2 p-3 rounded-md border-gray-300">
                        {data?.name}
                    </h1>
                </div>
                <div className=" flex flex-row w-full space-x-10">
                    <div className=" flex flex-col space-y-3 w-1/2">
                        <h1 className=" font-bold text-xl">
                            Date
                        </h1>
                        <DateReserve onChangeDate={(value : Dayjs)=>setDate(value)} />
                    </div>
                    <div className=" flex flex-col space-y-3 w-1/2">
                        <h1 className=" font-bold text-xl">
                            Time
                        </h1>
                        <input onChange={(e :React.ChangeEvent<HTMLInputElement>)=>setTime(e.target.value)} placeholder="04:30" className=" text-xl text-blck font-semibold placeholder:text-xl border-2 focus:outline-none px-5 border-gray-300 h-full rounded-md" type="text" />
                    </div>
                </div>
                <button  className=" bg-main-100 text-white py-3 rounded-md font-semibold">
                    RESERVE
                </button>
            </div>
        </main>
    )
}