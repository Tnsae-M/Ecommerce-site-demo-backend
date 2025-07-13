//import resources
const express = require("express");
const {
  getAllProducts,
  getProductsById,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/EcomControllers.js");
//create different routes for the site
//create an express router.
const router = express.Router();
//get all products route
router.get("/get", getAllProducts);
//get product by id
router.get("/get/:id", getProductsById);
//add a product
router.post("/add", addProduct);
//update a product
router.put("/update/:id", updateProduct);
//delete product.
router.delete("/delete/:id", deleteProduct);
//export router
module.exports = router;
