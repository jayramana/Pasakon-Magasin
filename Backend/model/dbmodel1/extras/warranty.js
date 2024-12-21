const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WarrantySchema = new Schema({
  warrantyPeriod: {
    type: String,
    required: true,
  },
  warrantyType: {
    type: String,
    required: true,
  },
  warrantySummary: {
    type: String,
    required: true,
  },
  warrantyDetails: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Warranty", WarrantySchema);