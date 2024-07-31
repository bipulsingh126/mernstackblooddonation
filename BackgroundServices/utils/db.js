import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//DB
const DB = process.env.DB

const dbConnection = async ()=>{
    try {
        await mongoose.connect(DB).then(() => {
            console.log("database connected to successfully");
        })
    } catch (error) {
        console.log(error);
        setTimeout(dbConnection, 8001);
    }
}


export {dbConnection};