const express = require("express");
const router = express.Router();

const { getAllReviews, getReviewByID, addReview, updateReview } = require("../controller/db2controller");

router.get("/", getAllReviews);
router.get("/:id", getReviewByID);
router.post("/add", addReview);
router.put("/update/:id", updateReview);


module.exports = router;

