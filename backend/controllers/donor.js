import { Donor } from "../models/Donor.js";


// create donor
const createDonor = async (req, res) => {
    try {
        const newDonor = Donor(req.body);
        const donor = await newDonor.save();
        res.status(201).json({
            message: donor
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error
        })
    }
}

// get all donors 

const getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            Donor
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error
        })
    }
}

// updated the donors

const updateDonor = async (req, res) => {
    try {
        const updateDonor = await Donor.findByIdAndUpdate(
            req.params.id,
            req.params.name,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            success: updateDonor
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: error
        })
    }
}

// get one Donor

const getOneDonor = async (req, res) => {
    try {
        const donor = await Donor.findById(req.params.id);
        res.status(200).json({
            success: true,
            donor
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error
        })
    }
}


// delete Donor 

const deleteDonor = async (req, res) => {
    try {
        await Donor.findByIdDelete(req.params.id);
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

// stats
const getDonorStats = async (req, res) => {
    try {
        const stats = await Donor.aggregate([
            {
                $group: {
                    _id: "$bloodGroup",
                    count: { $sum: 1 },
                }
            }
        ]);
        res.status(200).json({
            success: true,
            stats
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error
        })
    }
}


export { createDonor, getAllDonors, updateDonor, getOneDonor, deleteDonor, getDonorStats };