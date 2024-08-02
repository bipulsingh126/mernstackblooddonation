import ejs from 'ejs';
import dotenv from 'dotenv';
import { Donor } from '../models/Donor.js';
import { sendMail } from '../helpers/sandmail.js';

dotenv.config();

const formData = (data) => {
    const year = data.getFullYear();
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/ ${month}/${day}`;
}

const sendBloodDonationReminder = async () => {

    const donors = await Donor.find();
    if (donors.length > 0) {
        for (let donor of donors) {
            // calcalate the donor date , day
            const donorDate = new Date(donor.date);
            const today = new Date();
            const diffTime = Math.abs(today - donorDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 60) {
                ejs.renderFile(
                    "templates/BloodDonationReminder.ejs",
                    {
                        name: donor.name,
                        data: donor.data
                    },
                    async (err, data) => {
                        let messageoption = {
                            from: process.env.EMAIL,
                            to: donor.email,
                            subject: "Hello, Bridge Donor. ",
                            html: data
                        };
                        try {
                            await sendMail(messageoption);
                            const formattedDate = formatDate(today);
                            await Donor.findByIdAndUpdate(donor._id,
                                {
                                    $set: { date: formattedDate }
                                }
                            );
                        } catch (error) {
                            console.log(error);
                        }
                    }
                );
            }
        }
    }
};

export { sendBloodDonationReminder };