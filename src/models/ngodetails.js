const mongoose = require('mongoose');
const validator = require('validator');

const ngodetailsSchema = new mongoose.Schema({
    organize:{
        type:String,
        required:true
    },
    otherorganize:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    othercategory:{
        type:String
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
        type:String
    }]
})


const ngodetails = mongoose.model('ngodetails',ngodetailsSchema);
module.exports = ngodetails;