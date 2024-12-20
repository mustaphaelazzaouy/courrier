const mongoose=require('mongoose');

const ServiceSchema=mongoose.Schema({
    dp:{
        type:String,
        required:[true]
    },
    service:{ type:String,
        required:[true]
    }
},{timestamps:true});

const Service=mongoose.model("Service",ServiceSchema);
module.exports=Service;