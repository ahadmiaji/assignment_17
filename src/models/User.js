const mongoose = require('mongoose');

const DataSchema = mongoose.Schema( {
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    }


}, {timestamps: true, versionKey:false});





const User = mongoose.model("users", DataSchema );

module.exports = User;