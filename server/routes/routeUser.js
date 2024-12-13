const router = require("express").Router();
const {createUser,getUsers,getUserById,updateUser,deleteUser,getUsersByreq,login}=require("../controllers/user.controller.js")

/* get all users */
 router.get("/", getUsers);
 /* get  users by request */
 router.get("/req/", getUsersByreq);
/* get  user by id */
router.get("/:id", getUserById);
/* update  users by id */
router.put("/:id", updateUser);
/* post(create) one  user */
router.post("/", createUser);
/* delete  user by id */
router.delete("/:id", deleteUser);
/**login  */
router.post('/login',login)


module.exports = router;
