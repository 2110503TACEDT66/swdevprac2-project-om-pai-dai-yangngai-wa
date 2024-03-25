import CoWorkingCard from "@/components/CoWorkingCard";
import getCoworking from "@/libs/getCoworking"; 

export default async function Page({params} : {params : {id : string}}){

    const coworkingDetail = await getCoworking(params.id)
    return(
        <main className=" min-h-[90vh]  flex justify-center items-center bg-main-100">
            <CoWorkingCard coworking={coworkingDetail.data}/>
        </main>
    )
}