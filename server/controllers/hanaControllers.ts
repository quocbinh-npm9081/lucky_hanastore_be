import { Request, Response } from 'express';
import User from '../models/User';
import { genarateVerifyToken } from '../config/generateToken';

const hanaController = {
    index: async (req:Request , res:Response  ) =>{
        try {          
            const active_token = req.cookies.active_token;            
            if(!active_token) return res.status(200).json({msg: 'Vui lòng đăng nhập lại'});
            const userIdDecoded = await genarateVerifyToken(active_token);
           // const user = await User.findById(userIdDecoded.id).select('-_id');
          //  if(user?.role === 'admin')  return res.status(200).json({msg: 'OK ban la admin', active_token: active_token , user: user})
            return res.status(200).json({msg: 'OK', active_token: active_token , user: userIdDecoded})
        } catch (error) {
            return res.status(500).json({error})            
        }      
    },

    miniGame: async (req: Request, res:Response) => {
        try {          
            const active_token = req.cookies.active_token;            
            if(!active_token) return res.status(200).json({msg: 'Vui lòng đăng nhập lại'});
            const userIdDecoded = await genarateVerifyToken(active_token);
           // const user = await User.findById(userIdDecoded.id).select('-_id');
          //  if(user?.role === 'admin')  return res.status(200).json({msg: 'OK ban la admin', active_token: active_token , user: user})
            return res.status(200).json({msg: 'OK', active_token: active_token , user: userIdDecoded})
        } catch (error) {
            return res.status(500).json({error})            
        }  
    }
}

export default hanaController;
