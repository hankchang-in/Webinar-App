import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({} , { strict: false})
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema, "products");

export default Product