const User = require("../models/User");
const Mood = require("../models/mood");
const Journal = require("../models/Journal");

const getAdminDashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalAdmins = await User.countDocuments({
            role: "admin",
        });

        const totalMoodLogs = await Mood.countDocuments();

        const totalJournals = await Journal.countDocuments();

        res.status(200).json({

            success: true,

            stats: {

                totalUsers,

                totalAdmins,

                totalMoodLogs,

                totalJournals,

            },

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Server Error",

        });

    }

};


const getAllUsers = async (req, res) => {

    try {

        const users = await User.find()
            .select("-password")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            users,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }

};

const deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }

};

const updateUserRole = async (req, res) => {

    try {

        const { role } = req.body;

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        user.role = role;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Role updated successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }

};

module.exports = {
    getAdminDashboard,
    getAllUsers,
    deleteUser,
    updateUserRole,
};