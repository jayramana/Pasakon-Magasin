const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  prodid: {
    type: String,
    default:"",
    index: true, 
  },
  rating: {
    type: Number,
    required: true,
    min: 1, 
    max: 5, 
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0, 
  },
  keyword: {
    type: String,
    required: true,
    trim: true, 
  },
  briefDesc: {
    type: String,
    default: "",
    trim: true,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
