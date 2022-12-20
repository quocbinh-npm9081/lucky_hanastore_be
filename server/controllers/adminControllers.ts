import mongoose from "mongoose";
import {Response, Request} from 'express';

import User from "../models/User";
import Product from "../models/Product";
import { isNumber } from "util";
const adminControllers = {
    users : async (req: Request, res:Response) => {
        try {
            const users =await User.find();
            return res.status(200).json({msg: "OK: ", users: users})
        } catch (error) {
            return res.status(500).json({error: "error"});            
        }
    },
    createProduct : async(req:Request , res:Response) =>{
        const {name , priceOld , sale  , priceNew ,quantity}  = req.body;
        const errors: string[] = [];
        
        if(!name) errors.push('Tên sản phẩm không được bỏ trống !');
        else if(name.length > 20) errors.push('Tên sản phẩm không quá 20 kí tự');
        if(!priceOld) errors.push('Giá sản phẩm không được bỏ trống');
        else if(priceOld.length > 9 || priceOld.length < 4) errors.push('Giá sản phẩm không không hợp lệ');
        if(!quantity) errors.push('Số lượng không được bỏ trống');
        else if(!Number.isInteger(quantity)) errors.push('Số lượng là 1 số nguyên');
        if(errors.length > 0 ) return res.status(200).json({msg:errors });
        try {
            const newProduct = new Product({name , priceOld , sale  , priceNew, quantity });
            const isSave =  await newProduct.save();            
            if(isSave) return res.status(200).json({msg: 'Thêm sản phẩm thành công !'});
            return res.status(500).json({msg: 'Thêm sản phẩm thất bại !'});
        } catch (error) {
            return res.status(500).json({error: "Lỗi hệ thống"});
        }
    }

}

export default adminControllers;