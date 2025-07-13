//import resources.
const Product = require("../model/product");
//create controllers
//add a product controller
const addProduct = async (req, res) => {
  try {
    //import form data from body
    const formData = req.body;
    const productCard = await Product.create(formData);
    res.status(200).json({
      success: true,
      message: "product created successfully.",
      data: productCard,
    });
  } catch (e) {
    console.log("error occured:", e);
    res.status(500).json({
      success: false,
      message: "something went wrong.",
    });
  }
};
//get all products controller
const getAllProducts = async (req, res) => {
  try {
    //get all products.
    const allProducts = await Product.find({});
    if (allProducts?.length > 0) {
      res.status(200).json({
        success: true,
        message: "list retrieved successfully.",
        data: allProducts,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "no prodcut is found.",
      });
    }
  } catch (error) {
    console.log("error occured:", error);
    res.status(500).json({
      success: false,
      message: "something went wrong.",
    });
  }
};
//get product by id
const getProductsById = async (req, res) => {
  try {
    //import Id
    const productId = req.params.id;
    //use it to find product
    const productToGet = await Product.findById(productId);
    if (productToGet) {
      res.status(200).json({
        success: true,
        message: "product found!",
        data: productToGet,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "product not found. try different ID!",
      });
    }
  } catch (er) {
    console.log("error occured:", er);
    res.status(500).json({
      success: false,
      message: "something went wrong.",
    });
  }
};
//update product controller
const updateProduct = async (req, res) => {
  try {
    //get Id and use findandUpdate method.
    const ProdId = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(ProdId);
    if (updateProduct) {
      res.status(201).json({
        success: true,
        message: "Product updated successfully.",
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found. try a different Id.",
      });
    }
  } catch (e) {
    console.log("error occured", e);
    res.status(500).json({
      success: false,
      message: "Product update failed.",
    });
  }
};
//delete product controller
const deleteProduct = async (req, res) => {
  try {
    //use Id
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.status(200).json({
        success: true,
        message: "product deleted successfully.",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "product not found. Try a different Id.",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "product delete failed.",
    });
  }
};
//export all controllers to routes.js.
module.exports = {
  getAllProducts,
  getProductsById,
  addProduct,
  updateProduct,
  deleteProduct,
};
