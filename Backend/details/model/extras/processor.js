const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProcessorSchema = new Schema({
    processorbrand: {
        type: String,
        required: true
    },
    processorname: {
        type: String,
        required: true
    },
    ssd: {
        type: Boolean,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    ramtype: {
        type: String,
        required: true
    },
    emmcstoragecapacity: {
        type: String,
        required: true
    },
    processorVariant: {
        type: String,
        required: true
    },
    clockSpeed: {
        type: String,
        required: true
    },
    ramFrequency: {
        type: String,
        required: true
    },
    cache: {
        type: String,
        required: true
    },
    graphicProcessor: {
        type: String,
        required: true
    },
    numberOfCores: {
        type: Number,
        required: true
    },
    storageType: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Processor", ProcessorSchema);
