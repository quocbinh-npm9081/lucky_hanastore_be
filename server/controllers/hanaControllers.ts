import { Request, Response } from 'express';
import User from '../models/User';
import { isVietnamesePhoneNumber } from '../middewares/validations';

const hanaController = {
    index: async (req:Request , res:Response  ) =>{
        try {          
            return res.status(200).json({msg: 'OK'})
        } catch (error) {
            return res.status(500).json({error})            
        }      
    }
}

export default hanaController;
