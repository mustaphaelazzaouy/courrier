const Users = require("../models/User.model");
const mongoose=require('mongoose')




const getUsersByreq=async(req, res)=>{
  try {
    let  allusers;
    const {nom,prenom,dp,login}=req.query;
    
    if(dp!=="" && nom==="" && prenom==="" && login==="") { allusers = await Users.find({dp});}
    else if(dp==="" && nom!=="" && prenom==="" && login==="") { allusers = await Users.find({nom}).sort({createdAt:-1}); }
    else if(dp==="" && nom==="" && prenom!=="" && login==="") { allusers = await Users.find({prenom}).sort({createdAt:-1}); }
    else if(dp==="" && nom==="" && prenom==="" && login!=="") { allusers = await Users.find({login}).sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom==="" && login==="") { allusers = await Users.find({dp,nom}).sort({createdAt:-1}); }
    else if(dp!=="" && nom==="" && prenom!=="" && login==="") { allusers = await Users.find({dp,prenom}).sort({createdAt:-1}); }
    else if(dp!=="" && nom==="" && prenom==="" && login!=="") { allusers = await Users.find({dp,login}).sort({createdAt:-1}); }
    else if(dp==="" && nom!=="" && prenom!=="" && login==="") { allusers = await Users.find({nom,prenom}).sort({createdAt:-1}); }
    else if(dp==="" && nom!=="" && prenom==="" && login!=="") { allusers = await Users.find({nom,login}).sort({createdAt:-1}); }
    else if(dp==="" && nom==="" && prenom!=="" && login!=="") { allusers = await Users.find({prenom,login}).sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom!=="" && login==="") { allusers = await Users.find({dp,nom,prenom}).sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom==="" && login!=="") { allusers = await Users.find({dp,nom,login}).sort({createdAt:-1}); }
    else if(dp!=="" && nom==="" && prenom!=="" && login!=="") { allusers = await Users.find({dp,prenom,login}).sort({createdAt:-1}); }
    else if(dp==="" && nom!=="" && prenom!=="" && login!=="") { allusers = await Users.find({login,nom,prenom}).sort({createdAt:-1}); }
    else if(dp!=="" && nom!=="" && prenom!=="" && login!=="") { allusers = await Users.find({dp,nom,prenom,login}).sort({createdAt:-1}); }
    else  { allusers = await Users.find().sort({createdAt:-1}); }
      res.status(200).json(allusers);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}

const getUsers=async(req, res)=>{
  try {
    const allusers = await Users.find().sort({createdAt:-1}); 
      res.status(200).json(allusers);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}

const getUserById=async(req, res)=>{ 
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
   }

const createUser=async(req, res)=>{
    try {
      const existed=await Users.findOne({login:req.body.login})
    
      if(existed)
      return res.status(400).json({message:"Numéro de somme déjà existe"})

        const user = await Users.create(req.body);
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

module.exports={
  getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUsersByreq
}