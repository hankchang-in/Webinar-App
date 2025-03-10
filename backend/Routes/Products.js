const express = require('express')
const Router = express.Router()
const productController = require('../Controller/productController')

console.log('in routes')
Router.get('/' , productController.getProducts);   



module.exports =  Router;