import e, { Request, Response, NextFunction } from 'express';
export const isVietnamesePhoneNumber = (phoneNumber: string) => {
    return /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(phoneNumber);
};
export const isToxic = (name: string) => {
    const arrayToxic = ['xxx', 'cc'];
    return arrayToxic.includes(name);
};
export const validationLogin = (req: Request, res: Response , next : NextFunction) =>{
    const {name , phoneNumber} = req.body;
    const errors = [];
    if(!name){
        errors.push("Vui lòng nhập tên của bạn để shop liên lạc nhé");
    }else if(name.length > 8) {
        errors.push("Tên của bạn không dài quá 8 kí tự");
    }else if(isToxic(name)){
        errors.push("Tên của bạn không hợp lệ");
    }
    if(!phoneNumber){
        errors.push("Vui lòng nhập số điện thoại của bạn để shop liên lạc nhé");
    }else if(!isVietnamesePhoneNumber(phoneNumber)){
        errors.push("Số điện thoại của bạn không hợp lệ");
    }
    if (errors.length > 0) {
        return res.status(400).json({errors});
    }
    next();
}