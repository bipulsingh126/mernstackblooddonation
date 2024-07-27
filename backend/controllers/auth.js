import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

//register user

const registerUser = async (req, res) => {
    try {
        const newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS).toString()
        })
        const user = await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occured while creating user",
            error
        })
    }
}

//login user

const loginUser = async () => {
    try {

    } catch (error) {

    }
}


export { registerUser, loginUser };