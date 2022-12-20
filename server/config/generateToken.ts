import jwt from 'jsonwebtoken';
import { IUser } from './interface';
const privateKeyActiveToken = String(process.env.JWT_ACTIVE_TOKEN_SERCET);

export const genarateActiveToken = (payload: object) =>{
    return jwt.sign(payload, privateKeyActiveToken,{ expiresIn: '30d' });
}

export const genarateVerifyToken = (token : string )=>{
    return <any>jwt.verify(token, privateKeyActiveToken);
}