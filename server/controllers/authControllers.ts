import { Request, Response } from 'express';
import User from '../models/User';
import { isVietnamesePhoneNumber } from '../middewares/validations';

const authControllers = {
    login: async (req:Request , res:Response  ) =>{
        try {
            const {name , phoneNumber} = req.body;
            const isExistUser = await User.findOne({ phoneNumber : phoneNumber});
            if(isExistUser) return res.status(400).json({msg: "Số điện thoại đã được sử dụng !" });       
            if (!isVietnamesePhoneNumber(phoneNumber)) return res.status(400).json({msg: "Số điện thoại không hợp lệ !" }) ;      
            const newUser = new User({
                name: name,
                phoneNumber: phoneNumber
            })
            await newUser.save();
            return res.status(200).json({msg: 'OK', name:name, phoneNumber: phoneNumber })
        } catch (error) {
            return res.status(500).json({error})            
        }
      
    }
}

export default authControllers;
