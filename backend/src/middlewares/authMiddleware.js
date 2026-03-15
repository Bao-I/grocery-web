const jwt = require("jsonwebtoken");
<<<<<<< HEAD
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Không tìm thấy token xác thực!" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Người dùng không tồn tại!" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res
      .status(401)
      .json({ success: false, message: "Token không hợp lệ hoặc đã hết hạn!" });
=======

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Bạn cần đăng nhập để thực hiện chức năng này!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_key");

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Phiên đăng nhập hết hạn hoặc không hợp lệ!",
    });
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
  }
};

module.exports = { verifyToken };
