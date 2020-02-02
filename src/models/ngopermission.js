const mongoose = require('mongoose');
const validator = require('validator');

const ngopermissionSchema = new mongoose.Schema({
    organize:{
        type:String,
        required:true
    },
    otherorganize:{
        type:String
    },
    reasons:{
        type:String,
        required:true
    },
    projects:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error("Years can't be negative");
            }
        }
    },
    budget:{
        type:String
    },
    directorname:{
        type:String
    },
    date:{
        type:String
    },
    gender:{
        type:String
    },
    website:{
        type:String
    },
    address:{
        type:String
    },
    state:{
        type:String
    },
    category:{
        type:String
    },
    othercategory:{
        type:String
    },
    years:{
        type:Number
    },
    registrationid:{
        type:String
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


const ngopermission = mongoose.model('ngopermission',ngopermissionSchema);
module.exports = ngopermission;