import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const URL =`${process.env.URL_MONGO_ALATS}`;

const connect = async () =>{
    try {
        await mongoose.connect(URL);
        console.log("connect success!");
    } catch (err) {
        console.log("connect failes");       
    }
}

export default {connect};