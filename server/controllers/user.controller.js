const Users = require("../models/User.model");
const jwt=require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const bcrypt=require('bcryptjs')
const getUsersByreq=async(req, res)=>{
  try {
    let  allusers;
    const {nom,prenom,dp,login}=req.query;
    
    if(dp!=="" && nom==="" && prenom==="" && login==="") { allusers = await Users.find({dp});}
    else if(dp==="" && nom!=="" && prenom==="" && login==="") { allusers = await Users.find({nom}).populate('service').sort({createdAt:-1}); }
    else if(dp==="" && nom==="" && prenom!=="" && login==="") { allusers = await Users.find({prenom}).populate('service').sort({createdAt:-1}); }
    else if(dp==="" && nom==="" && prenom==="" && login!=="") { allusers = await Users.find({login}).populate('service').sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom==="" && login==="") { allusers = await Users.find({dp,nom}).populate('service').sort({createdAt:-1}); }
    else if(dp!=="" && nom==="" && prenom!=="" && login==="") { allusers = await Users.find({dp,prenom}).populate('service').sort({createdAt:-1}); }
    else if(dp!=="" && nom==="" && prenom==="" && login!=="") { allusers = await Users.find({dp,login}).populate('service').sort({createdAt:-1}); }
    else if(dp==="" && nom!=="" && prenom!=="" && login==="") { allusers = await Users.find({nom,prenom}).populate('service').sort({createdAt:-1}); }
    else if(dp==="" && nom!=="" && prenom==="" && login!=="") { allusers = await Users.find({nom,login}).populate('service').sort({createdAt:-1}); }
    else if(dp==="" && nom==="" && prenom!=="" && login!=="") { allusers = await Users.find({prenom,login}).populate('service').sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom!=="" && login==="") { allusers = await Users.find({dp,nom,prenom}).populate('service').sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom==="" && login!=="") { allusers = await Users.find({dp,nom,login}).populate('service').sort({createdAt:-1}); }
    else if(dp!=="" && nom==="" && prenom!=="" && login!=="") { allusers = await Users.find({dp,prenom,login}).populate('service').sort({createdAt:-1}); }
    else if(dp==="" && nom!=="" && prenom!=="" && login!=="") { allusers = await Users.find({login,nom,prenom}).populate('service').sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom!=="" && login!=="") { allusers = await Users.find({dp,nom,prenom,login}).populate('service').sort({createdAt:-1}); }
    else  { allusers = await Users.find().populate('service').sort({createdAt:-1}); }
      res.status(200).json(allusers);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}

const getUsers=async(req, res)=>{
  try {
    const allusers = await Users.find().populate('service').sort({createdAt:-1}); 
      res.status(200).json(allusers);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}

const getUserById=async(req, res)=>{ 
  try {
    const { id } = req.params;
    const user = await Users.findById(id).populate('service');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
   }

const createUser=async(req, res)=>{
    try {
      const {nom , prenom,email,login,password,service,profile}=req.body
      if(!nom || !prenom || !email || !login || !password || !service|| !profile )
        return res.status(400).json({
          messa:"il faut remplir tous les champs"
        })
      const existed=await Users.findOne({email})
    
      if(existed)
      return res.status(400).json({message:"Numéro de somme déjà existe"})

      const passwordHash=await bcrypt.hash(password,10)
        const user = await Users.create(
          {
            nom , 
            prenom,
            email,
            login,
            password:passwordHash,
            service,
            profile

          });
        res.status(200).json({user:user,error:null});
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
}

const updateUser=async(req, res)=>{
  try {
   
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id))
      return  res.status(400).json({ message: "ID not valide" });

    const user = await Users.findByIdAndUpdate(id,req.body,{new:true});
    if(!user){
      return  res.status(404).send({ message: "utilisateur non trouvé" });
    }
    // const updatedUser=await Users.findById(id)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const deleteUser=async(req, res)=>{
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndDelete(id);
    if(!user){
      return  res.status(404).send({ message: "Utilisateur non trouvé" });
    }
  
    res.status(200).json({message:'utilisateur supprimer'});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
const login=asyncHandler(async(req,res)=>{
  
    const {email,password}=req.body
    const user=await Users.findOne({email})
    if(!user)
      return res.status(404).json({message:'email or password incorrect'})
    const isPassword=await bcrypt.compare(password,user.password)
    if(!isPassword)
      return res.status(404).json({message:'email or password incorrect'})
    token=jwt.sign({id:user._id,service:user.service,profil:user.profil},'test')
    console.log(user)
  res.status(200).json({
      nom:user.nom,
      prenom:user.prenom,
      profile:user.profile,
      token:token,
      
    })
  
   
})
module.exports={
  getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUsersByreq,
    login
}