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
    spec,
    imageURL,
    quantity,
  } = req.body;
  let Prod;
  try {
    Prod = new Product({
      name,
      brand,
      model,
      addToCart,
      description,
      release,
      spec,
      imageURL,
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

exports.getAllProducts = getAllProducts;
exports.addProduct = addProduct;
exports.getProductById = getProductById;
exports.updateByID = updateByID;
exports.deleteByID = deleteByID;
exports.addMultipleProducts = addMultipleProducts;
exports.updateCart = updateCart;
exports.deleteAll = deleteAll;
