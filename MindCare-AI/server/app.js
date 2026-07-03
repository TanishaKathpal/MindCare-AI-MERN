const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "MindCare AI Backend Running 🚀"
    });
});

module.exports = app;