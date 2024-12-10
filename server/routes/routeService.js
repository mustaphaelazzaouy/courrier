const router = require("express").Router();
const {getServices, getServiceById, createService, updateService, deleteService,getAllServices}=require("../controllers/service.controller.js")

/* get  services by request param */
router.get("/", getServices);
/* get  all services  */
router.get("/all/", getAllServices);
/* get  service by id */
router.get("/:id", getServiceById);
/* update  service by id */
router.put("/:id", updateService);
/* post(create) one  service */
router.post("/", createService);
/* delete  service by id */
router.delete("/:id", deleteService);



module.exports = router;
