import ejs from 'ejs';
import dotenv from 'dotenv';
import { Prospect } from '../models/Prospect.js';
import { sendMail } from '../helpers/sandmail.js';


dotenv.config();

const sendEligibilityEmail = async () => {
    const prospects = await Prospect.find({ status: 0 });
    if (prospects.length > 0) {
        for (let prospect of prospects) {
            if (prospect.age < 18 || prospect.weight < 50) {
                ejs.renderFile(
                    "templates/BloodDonationEligibility.ejs",
                    {
                        name: prospect.name,
                        age: prospect.age,
                        weight: prospect.weight,
                    },
                    async (err, data) => {
                        let messageoption = {
                            from: process.env.EMAIL,
                            to: Prospect.email,
                            subject: "Blood Donation Eligibility ",
                            html: data,
                        };
                        try {
                            await sendMail(messageoption);
                            await Prospect.findByIdAndDelete(prospect._id);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                );
            }
        }
    }
};


export { sendEligibilityEmail };