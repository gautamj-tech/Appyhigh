const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'This field is required.'
    },
    imagesrc: {
        type: String
    }
    
});


mongoose.model('users', userSchema);