const express = require('express')
const app = express();
const PORT = 7777;
const cors = require('cors')
const MongoConnect = require('./Database/Mongo.js')
const authRoutes = require('./Routes/authRoutes.js')
const signupRoutes = require('./Routes/signupUser.js')
const authenticate = require('./Middleware/jwtAuthMiddleware.js')
const productsRoutes = require('./Routes/Products.js')
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",  // Your frontend URL
    credentials: true,  // ✅ Allow sending cookies
}));

app.get('/'  , (req,res)=>{
    res.send('Server listening to request sucessfully')
})


app.use('/api/auth', authRoutes)
app.use('/api/signup' , signupRoutes)
app.use('/api/products' , productsRoutes)

app.listen(PORT ,async ()=>{
    await MongoConnect()
    console.log(`Server listening to http://localhost:${PORT}`)
})