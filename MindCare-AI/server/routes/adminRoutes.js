const express = require("express");

const router = express.Router();

const isAdmin = require("../middleware/isAdmin");
const authMiddleware = require("../middleware/authMiddleware");




const {
    getAdminDashboard,
    getAllUsers,
    deleteUser,
    updateUserRole,
} = require("../controllers/adminController");




router.get(
  "/dashboard",
  authMiddleware,
  isAdmin,
  getAdminDashboard
);
router.get(
    "/users",
    authMiddleware,
    isAdmin,
    getAllUsers
);

router.delete(
    "/users/:id",
    authMiddleware,
    isAdmin,
    deleteUser
);

router.patch(
    "/users/:id/role",
    authMiddleware,
    isAdmin,
    updateUserRole
);
module.exports = router;