import {  Schema, model } from "mongoose";

const Product = new Schema({
    name: {
        type : String,
        require: [true , "Vui lòng nhập tên sản phẩm !"]
    },
    priceOld:  {
        type : String,
        require: [true , "Vui lòng nhập giá của sản phẩm !"]
    },
    priceNew: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number,
        require: [true, "Số lượng là bắt buộc !"]
    },
    sale :  {
        type : String,
        default : '0%'
    }
}, {
    timestamps: true
})

export default model("Product", Product);