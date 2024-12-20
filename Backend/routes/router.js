const routes = require('express').Router();

const { getAllProducts,addProduct,getProductById,updateByID,deleteByID,addMultipleProducts,updateCart,deleteAll,TopRatedProducts,BestSeller } = require("../controller/controller.js");


routes.get("/", getAllProducts);
routes.get("/toprated", TopRatedProducts);
routes.get("/bestseller", BestSeller);
routes.get("/:id", getProductById);
routes.post("/new", addProduct);
routes.post("/mnew", addMultipleProducts);
routes.put("/:id", updateByID);
routes.put("/cart/:id", updateCart);
routes.delete("/:id", deleteByID);
routes.delete("/", deleteAll);

module.exports = routes;