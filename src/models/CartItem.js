const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const DataSchema = mongoose.Schema( {
    user: {
       type: ObjectId,
       required: true,
       ref:"User"
    },
    product: {
        type: ObjectId,
        required: true,
        ref:"Product"
     },
     quantity : {
        type: Number,
        min: 1,
        required: true,
     }

}, {timestamps: true, versionKey:false});





const CartItem  = mongoose.model("cartitems ", DataSchema );

module.exports = CartItem ;