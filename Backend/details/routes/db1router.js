const routes = require('express').Router();

const { getAllProducts,addProduct,getProductById,updateByID,deleteByID,addMultipleProducts,updateCart,deleteAll,TopRatedProducts,BestSeller,getAllReviews, getReviewByID, addReview, updateReview  } = require("../controller/db1controller.js");


routes.get("/", getAllProducts);
routes.get("/toprated", TopRatedProducts);
routes.get("/bestseller", BestSeller);
routes.get("/:id", getProductById);
routes.get("/", getAllReviews);
routes.get("/:id", getReviewByID);
routes.post("/new", addProduct);
routes.post("/mnew", addMultipleProducts);
routes.post("/add", addReview);
routes.put("/:id", updateByID);
routes.put("/cart/:id", updateCart);
routes.put("/update/:id", updateReview);
routes.delete("/:id", deleteByID);
routes.delete("/", deleteAll);

module.exports = routes;