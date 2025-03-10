const Products = require('../Models/products')


module.exports.getProducts = async(req,res)=>{
    try{
        const products = await Products.find();
        res.send(products)
    }catch(err){
        console.log(err)
    }
}