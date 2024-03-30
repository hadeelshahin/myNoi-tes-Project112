const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();



// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);
//we don't execute this function we just pass a refrence to this function

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

exports.routes = router;

