// backend/server.js
require("dotenv").config(); // PHẢI nằm ở dòng 1
const express = require("express");
const cors = require("cors");

// Sau khi dotenv nạp xong thì mới nạp các route
const authRoutes = require("./src/routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5175;
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy ở cổng ${PORT}`);
});
