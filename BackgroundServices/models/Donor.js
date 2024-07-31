import mongoose from "mongoose";

const donorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tel: {
        type: String
    },
    bloodGroup: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
    },
    date: {
        type: String,
    },
    diseases: {
        type: String
    },
    age: {
        type: Number
    },
    bloodpressure: {
        type: Number
    },
    status: {
        type: Number,
        default: 0
    }
})


export const Donor = mongoose.model("Donor", donorSchema);