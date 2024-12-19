const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ConnectivitySchema = new Schema({
    wirelessLAN: {
        type: String,
        required: true
    },
    bluetooth: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Connectivity", ConnectivitySchema);
