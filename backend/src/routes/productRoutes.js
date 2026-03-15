const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const productController = require("../controllers/product.controller");
const { verifyToken: authMiddleware } = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const upload = require("../middlewares/upload.middleware");

router.get("/search", productController.searchProduct);
router.get("/", productController.getAllProducts);
router.delete("/:id", authMiddleware, productController.deleteProduct);
router.put("/:id", authMiddleware, upload.array("images", 10), productController.updateProduct);
router.get("/:id", productController.getProductById);

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    upload.array("images", 10),
    productController.createProduct
);
router.post(
    "/import-excel",
    authMiddleware,
    adminMiddleware,
    upload.single("file"),
    productController.importExcel
);
=======
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProduct);
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde

module.exports = router;
