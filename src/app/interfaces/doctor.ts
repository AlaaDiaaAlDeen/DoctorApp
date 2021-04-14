export interface Doctor {
    name:string,
    specialize:string,
    address:string,
    phone:string,
    whatsapp:string,
    education:[
        {name:string, year:string}
    ]
}
