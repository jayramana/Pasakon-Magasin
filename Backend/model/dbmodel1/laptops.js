const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const specsSchema = require("./specs").schema;
const additionalDetailsSchema = require("./extras/additionalDetails").schema;
const batterySchema = require("./extras/battery").schema;
const ConnectivitySchema = require("./extras/connectivity").schema;
const ProcessorSchema = require("./extras/processor").schema;
const DisplayAudioSchema = require("./extras/displayaudioport").schema;
const OperatingSystemSchema = require("./extras/operatingsystem").schema;
const warranty = require("./extras/warranty").schema;

const LaptopSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  addToCart: { type: Boolean, default: false },
  description: { type: String, required: true },
  release: { type: String, required: true },
  ratings: { type: String, default: "0.0" }, // Ensure ratings remain a string
  numberOfRatings: { type: Number, default: 0 },
  numberofReviews: { type: Number, default: 0 },
  category: { type: String, required: true }, // Category is required
  numberofbuys: { type: Number, default: 0 },
  spec: specsSchema, // Match the JSON object structure
  additionalDetails: additionalDetailsSchema,
  battery: batterySchema,
  connectivity: ConnectivitySchema,
  os: OperatingSystemSchema,
  warranty: warranty,
  processor: ProcessorSchema,
  displayAudio: DisplayAudioSchema,
  imageURL: { type: String, required: true },
  seller: { type: String, required: true }, // Match the JSON "seller" field as string
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Laptops", LaptopSchema);
