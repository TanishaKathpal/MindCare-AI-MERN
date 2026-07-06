const Mood = require("../models/mood");



// Create Mood
const createMood = async (req, res) => {
  try {
    const { mood, note } = req.body;

    // Today's start and end time
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    // Check if today's mood already exists
    const existingMood = await Mood.findOne({
      user: req.user.id,
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    if (existingMood) {
      return res.status(400).json({
        success: false,
        message: "You have already logged today's mood.",
      });
    }

    const newMood = await Mood.create({
      user: req.user.id,
      mood,
      note,
    });

    res.status(201).json({
      success: true,
      message: "Mood saved successfully",
      mood: newMood,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: moods.length,
      moods,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



const updateMood = async (req, res) => {
  try {
    const { mood, note } = req.body;

    const updatedMood = await Mood.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        mood,
        note,
      },
      {
        new: true,
      }
    );

    if (!updatedMood) {
      return res.status(404).json({
        success: false,
        message: "Mood not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Mood updated successfully",
      mood: updatedMood,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteMood = async (req, res) => {
  try {
    const deletedMood = await Mood.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deletedMood) {
      return res.status(404).json({
        success: false,
        message: "Mood not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Mood deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const getTodayMood = async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const mood = await Mood.findOne({
      user: req.user.id,
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    res.status(200).json({
      success: true,
      mood,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
module.exports = {
  createMood,
  getMoods,
  updateMood,
  deleteMood,
  getTodayMood,
};