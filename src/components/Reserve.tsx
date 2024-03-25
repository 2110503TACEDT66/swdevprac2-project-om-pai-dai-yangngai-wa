import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faArrowUpWideShort , faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
import Coworking from "./Coworking"
import getCoworkings from "@/libs/getCoworkings"
import CoworkingCatalog from "./CoworkingCatalog"

export default async function Reserve() {

    // const mockData : Coworking[] = [
    //     {
    //         id : "1",
    //         name : "Coworking Space 1",
    //         address : "1234/5",
    //         district : "Bangrak",
    //         province : "Bangkok",
    //         postalcode : "10500",
    //         tel : "02 123 4567",
    //         price_hourly : 100,
    //         opentime : "09:00",
    //         closetime : "18:00"
    //     },
    //     {
    //         id : "2",
    //         name : "C asean Samyan CO-OP",
    //         address : "1583 Rama IV Rd, Wang Mai",
    //         district : "Pathum Wan",
    //         province : "Bangkok",
    //         postalcode : "10330",
    //         tel : "02 219 6999",
    //         price_hourly : 100,
    //         opentime : "06:00",
    //         closetime : "4:30"
    //     },
    //
    //]

    const coworkings = await getCoworkings()

    return (
        <div className=" w-full min-h-[82vh] bg-white rounded-md">
            <div className=" p-5 w-full flex flex-row space-x-5">
                <div className=" w-10/12 flex flex-row space-x-3 p-2 bg-gray-200 rounded-md">
                    <div className=" flex justify-center items-center w-[5%]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className=" w-7 text-main-100 " />
                    </div>
                    <input className=" w-[85%] focus:outline-none rounded-md px-5" type="text"  />
                    <button className=" w-[10%] bg-main-100 text-white font-bold py-3 rounded-md">
                        SEARCH
                    </button>

                </div>
                <button className=" w-1/12 bg-main-100 text-white font-bold py-3 rounded-md flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowUpWideShort} className=" w-7 text-white" />
                </button>
                <button className=" w-1/12 bg-main-100 text-white font-bold py-3 rounded-md flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowDownWideShort} className=" w-7 text-white" />
                </button>
            </div>
            <CoworkingCatalog coworkingJson={coworkings}/>
        </div>
    )
}