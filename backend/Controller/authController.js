const User = require('../Models/Users'); // Import User model
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const jwt = require("jsonwebtoken");
require('dotenv').config(); 
module.exports.getAuthenticate = async (req,res)=>{
    const { email, password } = req.body;
    const generateToken = (userId , userRole , userName) => {
        return jwt.sign({ id:userId , role:userRole , name:userName}, process.env.JWT_SECRET, { expiresIn: "1d" });
    };
    
    try {
        const user = await User.findOne({ email });
        console.log(user);

        if (!user){
            res.status(400).json({ error: `No user found with this email` });
            return;
        } 

        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);

        if (!isMatch){
            res.status(400).json({  error: 'Password is incorrect' });
            return
        } 
        const token = generateToken(user._id , user.role , user.name);
        // res.setHeader(
        //     "Set-cookie",
        //     `token=${token}; HttpOnly; Max-Age=${3600}; Path='/'; Secure`
        // )
        res.setHeader("Set-Cookie", `token=${token}; Path=/; Secure; SameSite=Strict; Max-Age=3600`);
        res.status(200).json({ msg:'user logged in successfully ' , user: { username: user.name , email: user.email }  });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }

}