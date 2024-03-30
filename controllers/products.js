const Product = require("../models/product");

//this code for add product
//we get add-product page

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

//this function recives the request object
//it is a normal middleware function

/*--------------------------------------------------------------------------*/

exports.postAddProduct = (req, res, next) => {
  //products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

/*--------------------------------------------------------------------------*/
exports.getProducts = (req, res, next) => {
  Product.fetchAll(
    (cb = (products) => {
      res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
      });
    })
  );
};
