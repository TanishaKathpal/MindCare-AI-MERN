const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createMood,
  getMoods,
  updateMood,
  deleteMood,
  getTodayMood,
} = require("../controllers/moodController");


router.post("/", authMiddleware, createMood);

router.get("/today", authMiddleware, getTodayMood);

// Existing Route
router.get("/", authMiddleware, getMoods);

router.put("/:id", authMiddleware, updateMood);

router.delete("/:id", authMiddleware, deleteMood);

module.exports = router;