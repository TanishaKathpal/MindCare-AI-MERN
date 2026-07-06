const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getDashboardAnalytics,
} = require("../controllers/analyticsController");

router.get("/dashboard", authMiddleware, getDashboardAnalytics);

module.exports = router;