const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalController");

router.post("/", authMiddleware, createJournal);

router.get("/", authMiddleware, getJournals);

router.put("/:id", authMiddleware, updateJournal);

router.delete("/:id", authMiddleware, deleteJournal);

module.exports = router;