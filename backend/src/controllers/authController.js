// backend/src/controllers/authController.js
const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  // 1. Lấy dữ liệu từ body request
  const { email, password } = req.body;

  // 2. Kiểm tra đầu vào cơ bản
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng nhập đầy đủ email và mật khẩu",
    });
  }

  if (email === "bao@gmail.com" && String(password) === "123") {
    console.log(" Đăng nhập bằng tài khoản cứng: bao@gmail.com");

    const hardcodedUser = {
      customerID: 1,
      fullName: "Trần Quốc Bảo",
      email: "bao@gmail.com",
      phone: "0981462716",
      status: "ACTIVE",
      role: "CUSTOMER",
    };

    // Tạo Token
    const token = jwt.sign(
      { id: hardcodedUser.customerID, email: hardcodedUser.email },
      process.env.JWT_SECRET || "secret_key",
      { expiresIn: "24h" },
    );

    return res.status(200).json({
      success: true,
      message: "Đăng nhập cứng thành công!",
      token,
      user: hardcodedUser,
    });
  }
  // ============================================================

  // ============================================================
  // PHẦN 2: ĐĂNG NHẬP THỰC TẾ (TRUY VẤN DATABASE)
  // ============================================================
  try {
    // Truy vấn bảng Customer (Lưu ý: Chữ C viết hoa theo SQL của bạn)
    const [rows] = await db.execute("SELECT * FROM Customer WHERE email = ?", [
      email,
    ]);

    // Kiểm tra email tồn tại
    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Email hoặc mật khẩu không đúng!",
      });
    }

    const user = rows[0];

    // So sánh mật khẩu (SQL của bạn đang lưu text thuần '123')
    if (String(password) !== String(user.password)) {
      return res.status(401).json({
        success: false,
        message: "Email hoặc mật khẩu không đúng!",
      });
    }

    // Kiểm tra cấu hình JWT_SECRET
    if (!process.env.JWT_SECRET) {
      console.error("❌ LỖI: Chưa cấu hình JWT_SECRET trong file .env");
      return res.status(500).json({
        success: false,
        message: "Lỗi cấu hình server (JWT)",
      });
    }

    // Tạo Token cho user từ Database
    const token = jwt.sign(
      { id: user.customerID, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    console.log("✅ Đăng nhập DB thành công cho:", user.fullName);

    // Trả về thông tin (ẩn mật khẩu)
    const { password: _, ...userInfo } = user;
    return res.status(200).json({
      success: true,
      message: "Đăng nhập thành công!",
      token,
      user: userInfo,
    });
  } catch (error) {
    console.error("❌ LỖI SERVER TẠI CONTROLLER:", error.message);
    return res.status(500).json({
      success: false,
      message: "Đã có lỗi xảy ra tại Server",
      error: error.message,
    });
  }
};
