const mongoose = require("mongoose");   

const Schema = mongoose.Schema;

const batterySchema = new Schema({
    batterycelltype: {
        type: String,
        required: true
    },
    batteryenergycontent: {
        type: String,
        required: true
    },
    numberofcells: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Battery", batterySchema);