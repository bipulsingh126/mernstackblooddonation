import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

function createTransporter(config) {
    const transporter = nodemailer.createTransport(config);
    return transporter;
}

let configuration = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

const sendMail = async (messageoption) => {
    const transporter = await createTransporter(configuration);
    await transporter.verify();
    await transporter.sendMail(messageoption, (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log(info);
    })
}

export { sendMail };