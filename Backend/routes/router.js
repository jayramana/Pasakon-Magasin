const routes = require('express').Router();

const { getAllProducts,addProduct,getProductById,updateByID,deleteByID,addMultipleProducts,updateCart,deleteAll } = require("../controller/controller.js");


routes.get("/", getAllProducts);
routes.post("/new", addProduct);
routes.get("/:id", getProductById);
routes.put("/:id", updateByID);
routes.delete("/:id", deleteByID);
routes.post("/mnew", addMultipleProducts);
routes.put("/cart/:id", updateCart);
routes.delete("/", deleteAll);

module.exports = routes;