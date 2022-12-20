import { Document } from "mongoose";

export interface IUser extends Document{
    name: string,
    phoneNumber: string,
    role:string,
    gif:string,
    _doc: object
}

export interface IUserIdDecoded {
    id?: String,
    iat: number,
    exp: number
}

