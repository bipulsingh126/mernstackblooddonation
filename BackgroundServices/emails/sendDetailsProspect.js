import ejs, { name } from 'ejs';
import dotenv from 'dotenv';
import { Prospect } from '../models/Prospect.js';
import { sendMail } from '../helpers/sandmail.js';


dotenv.config();

const sendDetailsProspectEmail = async () => {
    const prospects = await Prospect.find({ status: 0 });
    if (prospects.length > 0) {
        for (let prospect of prospects) {
            ejs.renderFile("templates/BloodDonationProspect.ejs", {
                name: prospect.name
            },
                async (err, data) => {
                    let messageoption = {
                        from: process.env.EMAIL,
                        to: prospect.email,
                        subject: "Blood Bridge , Then You ",
                        html: data
                    }
                    try {
                        sendMail(messageoption);
                        await Prospect.finByIdAndUpdate(prospect._id, { $set: { status: 1 } });

                    } catch (error) {
                        console.log(error);

                    }
                }

            );
        }
    }
};


export { sendDetailsProspectEmail };