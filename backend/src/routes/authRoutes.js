const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
<<<<<<< HEAD
const activityController = require("../controllers/activityController");
const { verifyToken } = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/admin.middleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.put("/update-profile", verifyToken, authController.updateProfile);
router.put("/change-password", verifyToken, authController.changePassword);
router.get("/profile", verifyToken, authController.getProfile);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.patch("/lock-account", verifyToken, authController.lockAccount);
router.get("/activities", verifyToken, activityController.getActivities);

// Admin User Management Routes
router.get("/users", verifyToken, adminMiddleware, authController.getAllUsers);
router.post("/users", verifyToken, adminMiddleware, authController.adminCreateUser);
router.put("/users/:id", verifyToken, adminMiddleware, authController.updateUser);
router.delete("/users/:id", verifyToken, adminMiddleware, authController.deleteUser);
router.post("/google", authController.googleLogin);

// Admin Activities Log
router.get("/admin-activities", verifyToken, adminMiddleware, activityController.getAllActivities);

=======
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/register", authController.register);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.put("/update-profile", verifyToken, authController.updateProfile);
router.get("/profile", verifyToken, authController.getProfile);
router.post("/forgot-password", authController.forgotPassword);
router.patch("/lock-account", verifyToken, authController.lockAccount);
router.get("/users", authController.getAllUsers);
router.delete("/users/:id", authController.deleteUser);
router.post("/users", authController.adminCreateUser);
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde

module.exports = router;
