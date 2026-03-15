<<<<<<< HEAD
require("dotenv").config();
=======
require("dotenv").config(); // Nạp biến môi trường đầu tiên
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
const express = require("express");
const cors = require("cors");

const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const productRoutes = require("./src/routes/productRoutes");
<<<<<<< HEAD
const categoryRoutes = require("./src/routes/category.routes");
const reviewRoutes = require("./src/routes/reviewRoutes");
const adRoutes = require("./src/routes/adRoutes");
const revenueRoutes = require("./src/routes/revenueRoutes");
=======
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde

const app = express();

app.use(cors());

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
<<<<<<< HEAD
app.use("/api/category", categoryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/promotions", require("./src/routes/promotionRoutes"));
app.use("/api/ads", adRoutes);
app.use("/api/admin/revenue", revenueRoutes);
=======
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde

const PORT = process.env.PORT || 5175;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server đang chạy ở cổng ${PORT}`);
<<<<<<< HEAD
=======
      console.log(`Giới hạn dữ liệu: 100mb (đã fix lỗi Payload Too Large)`);
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
    });
  })
  .catch((err) => {
    console.error("Không thể khởi động server do lỗi kết nối DB:", err.message);
  });
