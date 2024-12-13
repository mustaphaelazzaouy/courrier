const fs=require('fs')
const path=require('path')
const {Post}=require('../models/Post')
const {cloudinaryRemoveImage,cloudinaryUploadImage}=require('../utils/cloudinary')

/**------------------------------------------------
 * @des create new post
 *@route /api/posts
 *@method POST
 *@acces private (only logged in user)
 ---------------------------------------------------*/

 module.exports.createPost=async(req,res)=>{
    try {
          //1.validation for image
    if(!req.file){
        console.log(req.file)
        return res.status(400).json({message:"no image provided"})
    }
    console.log(req.file)
    const {postNumber,subject,dateExecute,dateReceive}=req.body
    if(!postNumber || !subject || !dateExecute || !dateReceive)
        return res.status(400).json({message:'il faut remplir tous les champs'})
    let post = await Post.findOne({postNumber})
    if(post)
        return res.status(400).json({message:'deja existe'})
    const imagePath=path.join(__dirname,`../pdf/${req.file.filename}`)
    const result=await cloudinaryUploadImage(imagePath)
    console.log(result)
     post=await Post.create({
        postNumber,
        subject,
        dateExecute,
        dateReceive,
        file:{
            url:result.secure_url,
            publicId:result.public_id
        }

    })
       //5.send response
       res.status(201).json(post)
       //6. remove image from sever
       fs.unlinkSync(imagePath)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }


 /***
  * @description get all posts
  * @route /api/post
  * @method GET
  */

 module.exports.getAllPosts=async (req,res) => {
    try {
        const posts=await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }