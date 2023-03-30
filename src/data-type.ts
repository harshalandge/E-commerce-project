export interface Signup{
    name:string,
    password:string,
    email:string
}

export default interface Login{
    
    email:string;
    password:string;
}

export interface Products{
    length:any;
    proName:string;
    price:number;
    category:string;
    color:string;
    description:string;
    img:string;
    
}