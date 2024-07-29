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

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res.status(401).json({
                message: 'you have not registered',
                user
            })
        }
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS
        );
        const originalPassword = hashedPassword.toString(
            CryptoJS.enc.Utf8
        );

        if (originalPassword !== req.body.password) {
            return res.status(403).json({
                message: 'Invalid password '
            })
        }
        const { password, ...info } = user._doc;

        const accessToken = jwt.sign(
            {
                id: user._id, role: user.role
            },
            process.env.JWT_SEC,
            {
                expiresIn: "10d"
            }
        );
        res.status(200).json({
            ...info,
            accessToken
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'you have not registered',
        })
    }
}


export { registerUser, loginUser };