const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const additionalDetailsSchema = new Schema({
  diskDrive: {
    type: String,
    required: true,
  },
  webCamera: {
    type: String,
    required: true,
  },
  keyboard: {
    type: String,
    required: true,
  },
  pointerDevice: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  itemDimensions: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AdditionalDetails", additionalDetailsSchema);
