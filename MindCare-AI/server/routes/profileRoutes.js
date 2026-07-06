const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
  changePassword,
  deleteAccount,
} = require("../controllers/profileController");

router.get("/", authMiddleware, getProfile);

router.put("/", authMiddleware, updateProfile);

router.delete(
  "/delete-account",
  authMiddleware,
  deleteAccount
);
router.put(
  "/change-password",
  authMiddleware,
  changePassword
);

module.exports = router;