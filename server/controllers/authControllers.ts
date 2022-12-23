import { Request, Response } from 'express';
import User from '../models/User';
import { isVietnamesePhoneNumber } from '../middewares/validations';
import { genarateActiveToken, genarateVerifyToken } from '../config/generateToken';
import {  IUser } from '../config/interface';
const authControllers = {
    register: async (req:Request , res:Response  ) =>{
        try {
            const {name , phoneNumber} = req.body;
            const isExistUser = await User.findOne({ phoneNumber : phoneNumber});
            if(isExistUser) return res.status(400).json({msg: "Số điện thoại đã được sử dụng !" });       
            const newUser = new User({
                name: name,
                phoneNumber: phoneNumber
            })
            await newUser.save();
             
            return res.status(200).json({msg: 'OK', newUser:newUser});
        } catch (error) {
            return res.status(500).json({error})            
        }      
    },
    login: async (req:Request , res:Response  ) =>{
        try {
            const {name , phoneNumber} = req.body;
            const user = await User.findOne({name:name, phoneNumber : phoneNumber});
            if(!user) return res.status(400).json({msg: "Bạn chưa có tài khoản hãy đăng kí!" });       
                        const active_token = await genarateActiveToken({user}); 
            res.cookie('active_token', active_token,  {
                httpOnly: true,
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 day
            })         
            return res.status(200).json({msg: 'OK',  active_token});
        } catch (error) {
            return res.status(500).json({error})            
        }      
    },
    logout: async (req:Request , res:Response  ) =>{
        try {            
            return res.clearCookie('active_token').status(200).json({msg: 'Đăng xuất thành công'});
        } catch (error) {
            return res.status(500).json({error})            
        }      
    },
    getAuth: async (req:Request , res:Response  ) =>{
        try {          
            const active_token = req.cookies.active_token;   
            console.log("active_token", active_token);         
            if(!active_token) return res.status(400).json({msg: 'Vui lòng đăng nhập lại'});
          //  const userIdDecoded = await genarateVerifyToken(active_token);
           // const user = await User.findById(userIdDecoded.id).select('-_id');
          //  if(user?.role === 'admin')  return res.status(200).json({msg: 'OK ban la admin', active_token: active_token , user: user})
           // return res.status(200).json({msg: 'OK', active_token: active_token , user: userIdDecoded})
        } catch (error) {
            return res.status(500).json({error})            
        }      
    },
}

export default authControllers;
