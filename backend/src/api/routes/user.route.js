const express = require("express");
const {
  registerUser,
  loginUser,
  updateInfoUser,
  deleteUser,
  getUser,
  forgotPassword,
  resetPassword,
  checkingPassword,
  logOutUser,
} = require("../controllers/user.controller");
const upload = require("../../configs/multer.config");
const { auth } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/update/:id", upload.single("imageAvatar"), updateInfoUser);
router.delete("/delete/:id", auth, deleteUser);
router.get("/info", auth, getUser);
router.post("/forgot-password", forgotPassword);
router.post("/checking-password", checkingPassword);
router.patch("/reset-password", resetPassword);

router.post("/logout", logOutUser);

module.exports = router;
