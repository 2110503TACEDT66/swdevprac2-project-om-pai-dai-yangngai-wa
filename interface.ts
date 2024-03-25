interface Coworking {
    id : string,
    name: string,
    address : string,
    district: string,
    province: string,
    postalcode: string,
    tel : string,
    price_hourly : number,
    opentime : string,
    closetime : string,

}

interface CoworkingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: Coworking[]
}

interface User {
    name: string,
    email : string,
    password: string,
    telephone_number: string,
    role: string,

}

interface Reservation {
    appDate : string,
    user : string,
    coWorking : string,
    createAt : string,

}
