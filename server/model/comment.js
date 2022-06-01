const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const Comments = mongoose.Schema({
    name :{
        type: String
    },
    
    recommend:{
        type: Boolean,
        required: false,
    },

    email :{
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    comment :{
        type: String,
        required: true,
        min: 10,
        max: 255
    },
    date :{
        type: Date,
        default: Date.now()
    }


},{ timestamps: true });


module.exports = mongoose.model('Comment', Comments);
