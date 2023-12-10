const mongoose = require('mongoose');

const DataSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Must be positive value'],
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'Must be positive value'],
    },
    category: {
        type: String,
        required: true
    },
    imageUR: {
        type: String
    }


}, {timestamps: true, versionKey:false});





const Product = mongoose.model("products", DataSchema );

module.exports = Product;