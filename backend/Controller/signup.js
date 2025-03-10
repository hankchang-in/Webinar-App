const User = require('../Models/Users')


module.exports.signupUser = async(req,res)=>{
    try{
        const body = req.body
        const role = 'admin'
        const user = {
            name: body.name,
            email: body.email,
            password: body.password,
            role: role}
        const isExist = await User.findOne({email: user.email})
        if(isExist){
            console.log('User already exist')
            res.status(400).json({ message: 'User already exist' });
            return  
        }
        const newUser = await new User(user)
        const isCreated = await newUser.save();
        if(isCreated){
            res.status(200).json({ message: 'Signup successful' });
        }else{
            res.status(400).json({ message: 'Something went wrong during Signup process. Please try again later!!' });

        }
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Server error' });
    }
}   