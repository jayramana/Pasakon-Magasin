const mongoose = require("mongoose");
const Rev = require("../model/dbmodel2/review");

const getAllReviews = async (req, res) => {
  let Review;
  try {
    Review = await Rev.find();
  } catch (err) {
    console.log("Error", err);
  }

  if (!Review) {
    return res.status(404).json({ message: "No Reviews Found" });
  }
  res.status(200).json(Review);
};

const getReviewByID = async (req, res) => {
  let Review;
  const id = req.params.id;
  try {
    Review = await Rev.findById(id);
  } catch (err) {
    console.log("Error", err);
  }

  if (!Review) {
    return res.status(404).json({ message: "No Reviews Found" });
  }
  res.status(200).json(Review);
};

const addReview = async (req, res) => {
  const { prodid, rating, keyword, briefDesc } = req.body;
  let newReview;
  try {
    newReview = new Rev({ prodid, rating, keyword, briefDesc });
    await newReview.save();
  } catch (err) {
    console.log("Error adding Data", err);
  }

  if (!newReview) {
    return res.status(404).json({ message: "Error adding Review" });
  }
  return res.status(200).json(newReview);
};

const updateReview = async (req, res) => {
  const id = req.params.id;
  const { prodid, rating, keyword, briefDesc } = req.body;
  let updatedReview;
  try {
    updatedReview = await Rev.findByIdAndUpdate(id, {
      prodid, rating, keyword, briefDesc
    }, { new: true });
  } catch (err) {
    console.log("Error updating Data", err);
  }
  if (!updatedReview) {
    return res.status(404).json({ message: "Error updating Review" });
  }
  return res.status(200).json(updatedReview);
};

module.exports = { getAllReviews, getReviewByID, addReview, updateReview };
