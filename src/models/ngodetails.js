const mongoose = require('mongoose');
const validator = require('validator');

const ngodetailsSchema = new mongoose.Schema({
    directorname:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    website:{
        type:String
    },
    address:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    othercategory:{
        type:String
    },
    years:{
        type:Number
    },
    people:{
        type:Number
    },
    name:{
        type:String
    },
    phone:{
        type:String
    },
    emailid:{
        type:String
    },
    links:[{
        type:String
    }]
})


const ngodetails = mongoose.model('ngodetails',ngodetailsSchema);
module.exports = ngodetails;