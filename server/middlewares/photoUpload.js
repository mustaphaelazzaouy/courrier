const path=require('path')  
const multer=require('multer')
//photo stogare
const photoStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../pdf'))

    },
    filename:function(req,file,cb){
        if(file){
            cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname)
        }
        else
        {
            cb(null,false)
        }
    }
})


const photoUpload=multer({storage:photoStorage})
module.exports=photoUpload