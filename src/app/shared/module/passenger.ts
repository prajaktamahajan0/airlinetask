
export interface Ichild{
    name : string,
    age : number
}

export interface Ipassengers{
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: null | number,
    children: Ichild[] | null 
}