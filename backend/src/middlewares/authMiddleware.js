const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // 1. Lấy token từ header "Authorization" (Bearer <token>)
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Bạn cần đăng nhập để thực hiện chức năng này!",
    });
  }

  try {
    // 2. Xác thực token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_key");

    // 3. Lưu thông tin user vào request để các controller phía sau sử dụng
    req.user = decoded;

    next(); // Cho phép đi tiếp vào Controller
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Phiên đăng nhập hết hạn hoặc không hợp lệ!",
    });
  }
};

module.exports = { verifyToken };
