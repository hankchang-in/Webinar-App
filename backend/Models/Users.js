const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true, // Ensure that usernames are unique
        trim: true,   // Remove whitespace from the beginning and end
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure that emails are unique
        lowercase: true, // Convert emails to lowercase
        trim: true,   // Remove whitespace from the beginning and end
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for the password
    },
    role: {
        type: String,
        required: true,
    },
    // Additional fields can be added as needed
    createdAt: {
        type: Date,
        default: Date.now, // Set default to current date
    },
});

///hashing password before storing in DB;
userSchema.pre('save' , async function(next){
    if(!this.isModified('password')) return next();

    try {
        // Generate a salt with 10 rounds
        const salt = await bcrypt.genSalt(10); 
        // Hash the password with the generated salt
        this.password = await bcrypt.hash(this.password, salt); 
        next(); // Proceed to the next middleware
    } catch (error) {
        next(error); // Pass any errors to the next middleware
    }
})


// Create the User model from the schema
const User = mongoose.model('users', userSchema);

module.exports = User; // Export the User model

