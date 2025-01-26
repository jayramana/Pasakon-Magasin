const { default: mongoose } = require("mongoose");
const Product = require("../model/laptops");

const getAllProducts = async (req, res) => {
  let Prod;
  try {
    Prod = await Product.find();
  } catch (err) {
    console.log("Error fetching Data : ", err);
  }

  if (!Prod) {
    return res.status(404).json({ success: false, message: "Data not found" });
  }
  return res.status(200).json({ success: true, data: Prod });
};

const addProduct = async (req, res) => {
  const {
    name,
    brand,
    model,
    addToCart,
    description,
    release,
    ratings, 
    numberOfRatings, 
    numberofReviews, 
    category,
    numberofbuys, 
    spec, 
    additionalDetails,
    battery, 
    connectivity,
    os, 
    warranty,
    processor, 
    displayAudio,
    imageURL,
    seller,
    quantity,
  } = req.body;
  let Prod;
  try {
    const Prod = new Product({
      name,
      brand,
      model,
      addToCart: addToCart || false, 
      description,
      release,
      ratings: ratings || "0.0", 
      numberOfRatings: numberOfRatings || 0, 
      numberofReviews: numberofReviews || 0, 
      category,
      numberofbuys: numberofbuys || 0, 
      spec, 
      additionalDetails,
      battery, 
      connectivity,
      os, 
      warranty,
      processor, 
      displayAudio,
      imageURL,
      seller,
      quantity,
    });
    
    Prod = await Prod.save();
  } catch (err) {
    console.log("Error fetching Data : ", err);
  }

  if (!Prod) {
    return res
      .status(404)
      .json({ success: false, message: "Data cannot be Added" });
  }
  return res.status(200).json({ data: Prod });
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  let Prod;
  try {
    Prod = await Product.findById(id);
  } catch (err) {
    console.log("Error fetching Data : ", err);
  }

  if (!Prod) {
    return res.status(404).json({ success: false, message: "Data not found" });
  }
  return res.status(200).json({ success: true, data: Prod });
};

const updateByID = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    brand,
    model,
    addToCart,
    description,
    release,
    spec,
    imageURL,
    quantity,
  } = req.body;
  let Prod;
  try {
    Prod = await Product.findByIdAndUpdate(
      id,
      {
        name,
        brand,
        model,
        addToCart,
        description,
        release,
        spec,
        imageURL,
        quantity,
      },
      { new: true }
    );
  } catch (err) {
    console.log("Error Updating Data : ", err);
  }

  if (!Prod) {
    return res
      .status(404)
      .json({ success: false, message: "Data cannot be Updated" });
  }
  return res.status(200).json({ success: true, data: Prod });
};

const TopRatedProducts = async (req, res) => {
  try {
    const topRated = await Product.aggregate([
      {
        $addFields: {
          ratingtoNum: { $toDouble: "$ratings" },
        },
      },
      {
        $sort: { ratingtoNum: -1 },
      },
      {
        $limit: 5,
      },
    ]);
    return res.status(200).json(topRated)
  } catch (err) {
    return res.status(400).json({ error: "Error fetching Top Rated data" })
  }
};
const BestSeller = async (req, res) => {
  try {
    const bestSeller = await Product.aggregate([

      {
        $sort: { numberofbuys: -1 },
      },
      {
        $limit: 5,
      },
    ]);
    return res.status(200).json(bestSeller)
  } catch (err) {
    return res.status(400).json({ error: "Error fetching Top Rated data" })
  }
};

const deleteByID = async (req, res) => {
  const id = req.params.id;
  let Prod;
  try {
    Prod = await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log("Error Deleting Data : ", err);
  }

  if (!Prod) {
    return res.status(404).json({ success: false, message: "Data not found" });
  }
  return res.status(200).json({ success: true, message: "Data Deleted" });
};

const addMultipleProducts = async (req, res) => {
  const data = req.body;
  let Prod;
  try {
    Prod = await Product.insertMany(data);
  } catch (err) {
    console.log("Error fetching Data : ", err);
  }

  if (!Prod) {
    return res
      .status(404)
      .json({ success: false, message: "Data cannot be Added" });
  }
  return res.status(200).json({ data: Prod });
};

const updateCart = async (req, res) => {
  const id = req.params.id;

  try {
    const Prod = await Product.findById(id);
    if (!Prod) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    console.log("Before toggle:", Prod.addToCart);
    Prod.addToCart = !Prod.addToCart;
    console.log("After toggle:", Prod.addToCart);
    await Prod.save();
    return res.status(200).json({ success: true, data: Prod });
  } catch (err) {
    console.log("Error Updating Data : ", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteAll = async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    mongoose.connection.close();
    console.log(`${result.deletedCount} documents were deleted.`);
  } catch (error) {
    console.error("Error deleting documents:", error);
  }
};

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

exports.getAllProducts = getAllProducts;
exports.addProduct = addProduct;
exports.BestSeller = BestSeller;
exports.TopRatedProducts = TopRatedProducts;
exports.getProductById = getProductById;
exports.updateByID = updateByID;
exports.deleteByID = deleteByID;
exports.addMultipleProducts = addMultipleProducts;
exports.updateCart = updateCart;
exports.deleteAll = deleteAll;
exports.getAllReviews = getAllReviews;
exports.getReviewByID = getReviewByID;
exports.addReview = addReview;
exports.updateReview = updateReview;