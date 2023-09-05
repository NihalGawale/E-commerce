const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

const createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

const getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not available", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

const getAllProducts = catchAsyncError(async (req, res) => {
  const apiFeature = new ApiFeatures(Product.find(), req.query).search();

  let products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
  });
});

const updateProduct = catchAsyncError(async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorHandler("Product not available", 404));
    }
    const response = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindandModify: false,
    });

    if (response) return res.status(200).json({ success: true, response });
  }
});

const deleteSpecificProduct = catchAsyncError(async (req, res) => {
  if (req.body._id) {
    const response = await Product.findByIdAndDelete(req.body._id);
    if (response) {
      res.status(200).json({
        sudcesss: true,
        response,
      });
    }
  }
});

module.exports = {
  getAllProducts,
  createProduct,
  deleteSpecificProduct,
  updateProduct,
  getProductDetails,
};
