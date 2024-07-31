import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './utils/db.js';
import cron from 'node-cron'
const app = express();

dotenv.config();

//schedule tasks  
const run = ()=>{
    cron.schedule('* * * * * *', ()=>{
    })
 }
 run();

//server 
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`BackgroundServices is running on ${PORT}`);
    dbConnection();
});

