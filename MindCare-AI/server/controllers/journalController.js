const Journal = require("../models/Journal");

// Create Journal
const createJournal = async (req, res) => {
  try {
    const { title, content } = req.body;

    const journal = await Journal.create({
      user: req.user.id,
      title,
      content,
    });

    res.status(201).json({
      success: true,
      message: "Journal created successfully",
      journal,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// Get All Journals
const getJournals = async (req, res) => {
  try {

    const journals = await Journal.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      journals,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// Update Journal
const updateJournal = async (req, res) => {
  try {

    const journal = await Journal.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Journal updated successfully",
      journal,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// Delete Journal
const deleteJournal = async (req, res) => {
  try {

    const journal = await Journal.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Journal deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

module.exports = {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal,
};