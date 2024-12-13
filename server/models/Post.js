const mongoose =require('mongoose')
const postSchema=new mongoose.Schema({
    postNumber:{
        type:String,
        required:true,
        unique:true
    },
    subject:{
        type:String,
        required:true,
    },
    dateReceive:{
        type:Date
    },
    dateExecute:{
        type:Date
    },
    file:{
        type:Object,
        default:{
            url:"",
            publicId:null
        }},
     observation:{
            type:String
        }

})
const Post=mongoose.model("post",postSchema)

module.exports ={Post}