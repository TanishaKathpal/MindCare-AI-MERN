const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  analyzeMood,
} = require("../controllers/aiController");

router.post(
  "/analyze",
  authMiddleware,
  analyzeMood
);

module.exports = router;