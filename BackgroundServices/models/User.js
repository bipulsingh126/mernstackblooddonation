import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 0
    },
    role: {
        type: String,
        default: "admin"
    }

}, { timestamp: true });

export const User = mongoose.model("User", userSchema);