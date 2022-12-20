import mongoose from "mongoose";
const URL = process.env.URL_MONGO_ALATS;

async function connect(){
    try {
        await mongoose.connect(String(URL));
        console.log("connect success!");
    } catch (err) {
        console.log("connect failes");
    }
}

export default {connect}