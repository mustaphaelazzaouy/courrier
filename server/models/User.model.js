const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({

    nom:{
        type:String,
         required:true
        },
    prenom:{
        type:String,
         required:true
         },
    login:{
        type:String, required:true,
        unique:true
       },
    email:{
        type:String,
        required:true ,
        unique:true
       },
    password:{
        type:String,
        required:true
    },
    service:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"service"
    },
    profile:{ 
        type:String,
        required:true
    }
},{timestamps:true});

const User=mongoose.model("User",UserSchema);
module.exports=User;