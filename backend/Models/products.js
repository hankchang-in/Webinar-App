const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required : true
    },
    productPrice:{
        type: String,
        required : true
    },
    productQuantity:{
        type: String,
        required : true
    },
    productCategory:{
        type: String,
        required : true
    },
    productDescription:{
        type: String,
        required : true
    },
    productImage:{
        type: String,
        required : true
    }
})



const Products = mongoose.model('products' , productSchema);

module.exports = Products; // Export the Product model