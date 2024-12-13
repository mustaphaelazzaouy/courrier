const router = require("express").Router();
const postController =require('../controllers/post.controller')
const photoUpload=require('../middlewares/photoUpload')
router.post('/',photoUpload.single("file"),postController.createPost)
router.get('/',postController.getAllPosts)
module.exports=router