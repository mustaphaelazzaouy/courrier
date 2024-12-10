const Services = require("../models/Service.model");

const getServices=async(req, res)=>{
  try {
    let  allservices
      const {dp,service}=req.query
     
     
      if(dp==="*"){ allservices = await Services.find();}
      // else if(service!=="" && dp==="*"){allservices = await Services.find({service});}
      else {allservices = await Services.find({dp});}  // if(service==="" && dp!=="*")
      // else{allservices = await Services.find({dp, service}); }

      //pagination
      // const page =parseInt(req.query.page) 
      // const limit =parseInt(req.query.limit)
      // const results={}
      // results.totalServices=allservices.length
      // results.startIndex=(page-1)*limit
      // results.lastIndex=page*limit
      // // if(results.lastIndex>allservices.length){results.lastIndex=allservices.length}
      // // else{results.lastIndex=page*limit}
      // results.pageCount=Math.ceil(allservices.length/limit)
      // if(results.lastIndex<allservices.length){results.next={ page:page+1 }}
      // if(results.startIndex>0){ results.prev={ page:page-1  } }
      // results.result=allservices.slice(results.startIndex,results.lastIndex)
      //pagination

      //  getservice = await Services.find(req.query);
      res.status(200).json(allservices);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}


const getAllServices=async(req, res)=>{
  try {
      let  allservices    
      allservices = await Services.distinct("dp")
      res.status(200).json(allservices);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}

const getServiceById=async(req, res)=>{ 
    try {
    const { id } = req.params;
    const service = await Services.findById(id);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }}

const createService=async(req, res)=>{
    try {
      
        const service = await Services.create(req.body);
        res.status(200).json({service:service,error:null});
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
}

const updateService=async(req, res)=>{
    try {
      console.log("update")
        const { id } = req.params;
        const service = await Services.findByIdAndUpdate(id,req.body,{new:true});
        if(!service){
          return  res.status(404).send({ message: "Service non trouvé" });
        }
        // const updatedProduct=await Services.findById(id)
        res.status(200).json(service);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
}

const deleteService=async(req, res)=>{
    try {
        const { id } = req.params;
        const service = await Services.findByIdAndDelete(id);
        if(!service){
          return  res.status(404).send({ message: "Service non trouvé" });
        }
      
        res.status(200).json({message:'service supprimer'});
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
}

module.exports={
    getServices,
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService
}