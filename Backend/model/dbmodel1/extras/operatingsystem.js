const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OperatingSystemSchema = new Schema({
    osarchitecture: {
        type: String,
        required: true
    },
    os: {
        type: String,
        required: true
    },  
    supportingos: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("OperatingSystem", OperatingSystemSchema);