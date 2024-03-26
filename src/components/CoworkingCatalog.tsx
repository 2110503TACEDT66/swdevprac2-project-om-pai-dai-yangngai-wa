import Coworking from "./Coworking"

export default function CoworkingCatalog({coworkingJson}: {coworkingJson:CoworkingJson}) {
    return (
        <>
        <div className=" flex flex-col space-y-5 p-5">
                {
                    coworkingJson.data.map((coworkingItem:Coworking) => (
                        <Coworking key={coworkingItem.name} coworking={coworkingItem} />
                    ))
                }
            </div>
        </>
    )
}