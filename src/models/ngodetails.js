const mongoose = require('mongoose');
const validator = require('validator');

const ngodetailSchema = new mongoose.Schema({
    organize:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    reasons:{
        type:String,
        required:true
    },
    years:{
        type:Number
    },
    people:{
        type:Number
    },
    links:[{
        link:{
            type:String
        }
    }]
})


const ngo = mongoose.model('ngo',ngoSchema);
module.exports = ngo;