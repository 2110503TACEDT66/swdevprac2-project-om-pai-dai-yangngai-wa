import Link from "next/link";



export default function Reservation( {reservation} : {reservation : Reservation}){
    return(
        <div className=" flex flex-row justify-between h-full bg-gray-200 rounded-md px-3 py-3">
            <div className=" flex flex-col space-y-3 h-full">
                <div className=" flex flex-row items-center space-x-3">
                    <h1 className=" font-bold text-xl">
                        Name : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        {reservation.coWorking}
                    </h1>
                </div>
                <div className=" flex flex-row  items-center space-x-3">
                    <h1 className=" font-bold text-xl">
                        User : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        {reservation.user}
                    </h1>
                </div>
                <div className=" flex flex-row  items-center space-x-3">
                    <h1 className=" font-bold text-xl">
                        Date : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        {reservation.appDate.split(" ")[1]}
                    </h1>
                    <h1 className=" font-bold text-xl">
                        Time : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        {reservation.appDate.split(" ")[0]}
                    </h1>
                
                </div>
            </div>
            <div className=" flex flex-col w-2/12 h-full space-y-5 justify-center">
                <Link href={'/reserve'} className=" h-20 bg-amber-500 flex justify-center items-center text-white font-semibold rounded-md">
                    Edit
                </Link>
                <Link href={"/"} className=" h-20 bg-red-600 flex justify-center items-center  text-white font-semibold rounded-md">
                    Delete
                </Link>
            </div>
            
            
        </div>
    )
}