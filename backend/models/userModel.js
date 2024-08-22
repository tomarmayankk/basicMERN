const mongoose = require('mongoose');

//Schema for the user
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number
    },
}, { timestamps: true});

//Model
const User = mongoose.model('User', userSchema);
module.exports = User;