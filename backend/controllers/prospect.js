import { Prospect } from "../models/Prospect.js";


// create prosepct
const createProspect = async (req, res) => {
    try {
        const newProspect = Prospect(req.body);
        const Prospect = await newProspect.save();
        res.status(201).json({
            message: "created successfully",
            Prospect
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error
        })
    }
}

// get all prosepct
const getAllProspect = async (req, res) => {
    try {
        const prospect = await Prospect.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            prospect
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error
        })
    }
}

// updated the prospect

const updateProspect = async (req, res) => {
    try {
        const updateProspect = await Prospect.findByIdAndUpdate(
            req.params.id,
            req.params.name,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            success: "updated successfully",
            updateProspect
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: error
        })
    }
}

// get one prospect

const getOneProspect = async (req, res) => {
    try {
        const prospect = await Prospect.findById(req.params.id);
        res.status(200).json({
            success: true,
            prospect
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error
        })
    }
}


// delete prosepct

const deleteProspect = async (req, res) => {
    try {
        await Prospect.findByIdDelete(req.params.id);
        res.status(200).json({
            success: "Donor deleted successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: "Donor not deleted ",
            error
        })
    }
}

export { createProspect, getAllProspect, getOneProspect, updateProspect, deleteProspect };