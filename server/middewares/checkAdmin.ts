import  { Request, Response, NextFunction } from 'express';
import { genarateVerifyToken } from '../config/generateToken';
export const checkAdmin = (req: Request, res:Response , next:  NextFunction) =>{
    const active_token = req.cookies.active_token;  
    if(!active_token) return res.status(200).json({msg: 'Vui lòng đăng nhập !'});
    const userDecoded =  genarateVerifyToken(active_token);
    if (userDecoded.user.role === 'user') {
        return res.status(200).json({msg: 'Vui lòng đăng nhập bằng tài khoản admin !'});
    }
    next();
}