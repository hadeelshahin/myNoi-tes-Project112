const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);
//we don't execute this function we just pass a refrence to this function

router.get('/products')

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

exports.routes = router;
