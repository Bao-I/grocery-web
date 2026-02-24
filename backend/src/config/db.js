// backend/src/config/db.js
const mysql = require("mysql2/promise");
// Không cần require('dotenv') ở đây nữa vì đã có ở server.js,
// nhưng thêm vào cho chắc chắn nếu bạn chạy file này độc lập
require("dotenv").config({ path: "./.env" });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Kiểm tra biến môi trường (Xóa dòng này sau khi chạy được)
console.log("Kiểm tra User DB:", process.env.DB_USER);

pool
  .getConnection()
  .then((connection) => {
    console.log("✅ Kết nối MySQL thành công!");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Kết nối MySQL thất bại!");
    console.error("Chi tiết lỗi:", err.message);
  });

module.exports = pool;
