const express = require("express");
const {
  getAllProducts,
  createProduct,
  deleteSpecificProduct,
  updateProduct,
  getProductDetails,
} = require("../controllers/productController");
const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.get("/getProductDetails/:id", getProductDetails);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteSpecificProduct", deleteSpecificProduct);

module.exports = router;
