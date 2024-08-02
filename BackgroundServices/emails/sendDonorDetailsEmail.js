import ejs from 'ejs';
import dotenv from 'dotenv';
import { Donor } from '../models/Donor.js';


dotenv.config();


const sendDonorDetailsEmail = async ()=>{

    const donors = await Donor.find({status : 0});

    if (donors.length > 0) {
        for(let donor of donors){
            ejs.renderFile(
                "templates/BloodDonationDonor.ejs",
                {
                    name: donor.name,
                    email : donor.email,
                    tel : donor.tel,
                    address : donor.address,
                }
            )
        }
    }
};


export {sendDonorDetailsEmail};