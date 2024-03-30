//const products = [];
//const { json } = require("body-parser");
const fs = require("fs");
//to construct the path that works on all the operating systems
const path = require("path");
//create helper function::
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);
const getProductsFromFile = (cb) => {
 
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
  //return products;
};

//simply exports a constructor function or class

// module.exports=function product(){

// }

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  //this method is responsible for saving a product to a JSON file
  save() {
    //This line constructs the file path where the products will be saved
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "products.json"
    // );
    // //we will read a file at the path p
    // fs.readFile(p, (err, fileContent) => {
    //   //fileContent there will be a buffer
    //   //console.log(err);
    //   let products = [];
    //   if (!err) {
    //     //it will be null if we got none
    //     products = JSON.parse(fileContent);
    //   }
    getProductsFromFile((products)=>{
      products.push(this); //the value of this is going to be inherited from the surounding lexial scope
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });

    });
    // products.push(this); //the value of this is going to be inherited from the surounding lexial scope
    // fs.writeFile(p, JSON.stringify(products), (err) => {
    //   console.log(err);
    // });
    //});
    //products.push(this);
    //this refers to the object created based on this class
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
