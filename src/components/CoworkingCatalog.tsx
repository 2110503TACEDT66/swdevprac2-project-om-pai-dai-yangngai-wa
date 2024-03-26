import Coworking from "./Coworking"
import CircularProgress from '@mui/material/CircularProgress';

export default function CoworkingCatalog({coworking, isLoading}: {coworking: any , isLoading: boolean}) {
    return (
        <>
        {
            isLoading ? 
            (
                <div className=" flex justify-center items-center mt-40">
                    <CircularProgress  color="secondary" />
                </div>
            )
            :
            (
                coworking.length !== 0 ?
                (
                    <div className=" flex flex-col space-y-5 p-5">
                        {
                            coworking.map((coworkingItem:Coworking) => (
                                <Coworking key={coworkingItem.name} coworking={coworkingItem} />
                            ))
                        }
                    </div>
                )
                :
                (
                    <div className=" flex justify-center items-center h-full mt-40">
                        <h1 className=" text-3xl font-bold">
                            No Coworking Found
                        </h1>
                    </div>
                )
            )
        }
        </>
    )
}