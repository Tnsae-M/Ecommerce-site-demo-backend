//import mongoose to access DB.
const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");
//create a product schema.
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name is required."],
    trim: true,
    kMaxLength: [100, "product name can't be longer than 100 letters."],
  },
  company: {
    type: String,
    required: [true, "Company name is required."],
    trim: true,
    kMaxLength: [100, "Company name can't be longer than 100 letters."],
  },
  quantity: {
    type: Number,
    required: [true, "There must be atleast 1 product listed."],
  },
  stock: {
    type: String,
    trim: true,
    status: ["out of stock", "on stock.", "unknown."],
  },
  ProductionDate: {
    type: Number,
    required: [true, "date of production is required."],
    minDateBound: [1980, "product is too old."],
    maxDateBound: [
      new Date().getFullYear(),
      "product can't be from the future.",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//export the schema as a model.then import to controllers.
module.exports = mongoose.model("Product", productSchema);
