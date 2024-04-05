const express = require("express");
const router = express.Router();
const shopController = require("../controllers/admin");



router.get("/",shopController.getProducts); //statring page
//router.get("/products", productsController.getProducts);
//router.get('/cart');
//router.get('checkout');


module.exports = router;
