import Reservation from "./Reservation"

export default function HistoryCatalog({reservationJson}:{reservationJson:ReservationJson}){

    return (
        <div className=" flex flex-col space-y-5 p-5">
            {
                reservationJson.data.map((reservation:Reservation) => {
                    return (
                        <Reservation key={reservation.coWorking} reservation={reservation} />
                    )
                }
                )
            }
        </div>
    )
}