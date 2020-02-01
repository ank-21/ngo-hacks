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
    }
})


const ngopermission = mongoose.model('ngopermission',ngopermissionSchema);
module.exports = ngopermission;