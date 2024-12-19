const mongoose = require("mongoose");
const {Schema} = mongoose;


const specsSchema = new Schema({
    graphics: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    storagespace: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model("Specs", specsSchema);