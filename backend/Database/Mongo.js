const mongoose = require('mongoose')

const ConnectToDB = async ()=>{
    const uri = "mongodb+srv://vishupaul147:Vishu007@cluster0.ss4ig6h.mongodb.net/webinarDB?retryWrites=true&w=majority&appName=Cluster0";
    try{
            await mongoose.connect(uri)
            console.log('Databse is connected sucessfully')
    }catch(err){
        console.log('Error occured during database connection',err)
    }
}


module.exports = ConnectToDB; // Export the function



