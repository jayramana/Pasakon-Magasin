const mongoose = require("mongoose");
const { Schema } = mongoose;

const specsSchema = new Schema({
  weight: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  gpuscore: {
    type: String,
    required: true,
  },
  cpuscore: {
    type: String,
    required: true,
  },
  storagescore: {
    type: String,
    required: true,
  },
  ramscore: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Specs", specsSchema);
