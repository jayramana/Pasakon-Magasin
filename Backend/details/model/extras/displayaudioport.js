const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DisaudpertsSchema = new Schema({
    touchScreen: {
        type: Boolean,
        required: true
    },
    screenSize: {
        type: String,   
        required : true
    },
    screenResolution: {
        type: String,
        required: true
    },
    screenType: {
        type: String,
        required: true
    },
    speakers: {
        type: String,
        required: true
    },
    internalMic: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Disaudperts", DisaudpertsSchema);
