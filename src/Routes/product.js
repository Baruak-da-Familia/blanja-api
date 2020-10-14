const express = require("express");
const productController = require("../Controllers/product");
const imgUpload = require("../Helpers/Middlewares/imgUpload");

const productRouter = express.Router();

productRouter.post("/", imgUpload.multiUpload, productController.addNewProduct);
productRouter.patch(
  "/:id",
  imgUpload.multiUpload,
  productController.updateProduct
);
productRouter.delete("/delete/:id", productController.deleteProduct);

module.exports = productRouter;
