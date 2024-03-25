export default function Coworking(){
    return(
        <div className=" flex flex-row justify-between bg-gray-200 rounded-md px-3 py-3">
            <div className=" flex flex-col space-y-3">
                <div className=" flex flex-row items-center space-x-3">
                    <h1 className=" font-bold text-xl">
                        Name : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        C asean Samyan CO-OP
                    </h1>
                </div>
                <div className=" flex flex-row  items-center space-x-3">
                    <h1 className=" font-bold text-xl">
                        Tel : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        02 219 6999
                    </h1>
                    <h1 className=" font-bold text-xl">
                        Open : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        6.00 AM
                    </h1>
                    <h1 className=" font-bold text-xl">
                        Close : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        4.30 AM
                    </h1>
                </div>
                <div className=" flex flex-row  items-center space-x-3">
                    <h1 className=" font-bold text-xl">
                        Address : 
                    </h1>
                    <h1 className=" bg-white p-3 rounded-lg font-bold text-xl">
                        1583 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330
                    </h1>
                </div>
            </div>
            <button className=" bg-main-100 my-5 w-2/12 text-white font-bold rounded-md">
                SELECT
            </button>
        </div>
    )
}