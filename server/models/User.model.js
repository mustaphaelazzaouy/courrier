const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({

    nom:{type:String, required:[true]},
    prenom:{type:String, required:[true] },
    login:{type:String, required:[true],
        unique:true
       },
    email:{type:String, required:[true]    },
    mot_passe:{type:String, required:[true]},
    dp:{type:String, required:[true]  },
    service:{ type:String, required:[true]},
    profil:{ type:String, required:[true]}
},{timestamps:true});

const User=mongoose.model("User",UserSchema);
module.exports=User;