import mongoose , { Schema, model  } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, "Vui lòng nhập tên của bạn để shop liên lạc nhé <3"],
        trim: true,
        maxLength: [8, 'Tên của bạn không dài quá 8 kí tự'],
    },
    phoneNumber: {
        unique: true,
        type: String,
        require: [true, 'Vui lòng nhập số điện thoại để shop liên lạc nhé <3'],
        trim: true,
        maxLength: [11, 'Số điện thoại không hợp lệ']
    },
    role: {
        type: String,
        default: 'user' // admin
    },
    gif: {
        type: String,
        default : ""
    }

}, {
    timestamps: true,
  },)


export default model("User", userSchema);