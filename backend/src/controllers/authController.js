const User = require("../models/User");
const jwt = require("jsonwebtoken");

// ĐĂNG KÝ
exports.register = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    // Kiểm tra email tồn tại chưa
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "Email đã tồn tại!" });
    }

    const newUser = await User.create({ fullName, email, phone, password });

    res.status(201).json({
      success: true,
      message: "Đăng ký thành công!",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ĐĂNG NHẬP
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Tài khoản cứng (như bạn yêu cầu)
    if (email === "bao@gmail.com" && password === "123") {
      const token = jwt.sign(
        { id: "admin_id", email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" },
      );
      return res.status(200).json({
        success: true,
        token,
        user: {
          fullName: "Trần Quốc Bảo",
          email: "bao@gmail.com",
          phone: "0981462716",
          role: "CUSTOMER",
        },
      });
    }

    // 2. Truy vấn MongoDB
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Email hoặc mật khẩu không đúng!" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    res.status(200).json({
      success: true,
      message: "Đăng nhập thành công!",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi Server" });
  }
};
