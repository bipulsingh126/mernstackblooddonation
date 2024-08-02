import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './utils/db.js';
import cron from 'node-cron'
import { sendDetailsProspectEmail } from './emails/sendDetailsProspect.js';
import { sendEligibilityEmail } from './emails/sendEligibilityEmail.js';
import { sendBloodDonationReminder } from './emails/sendBloodDonationReminder.js';
import { sendDonorDetailsEmail } from './emails/sendDonorDetailsEmail.js';
const app = express();

dotenv.config();

//schedule tasks  
const run = ()=>{
    cron.schedule('* * * * * *', ()=>{
        sendDetailsProspectEmail();
        sendEligibilityEmail();
        sendBloodDonationReminder();
        sendDonorDetailsEmail();
    })
 }
 run();

//server 
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`BackgroundServices is running on ${PORT}`);
    dbConnection();
});

