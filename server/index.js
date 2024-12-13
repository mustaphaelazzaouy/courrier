const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const cors =require('cors')
const { errorHanddler } = require('./middlewares/error')



const app=express()
/*middleware*/
app.use(express.json())
app.use(cors())

/* database connection then start server at 5000 port*/
//mongodb+srv://melazzaouy:FCy2sH9OLuKYB0n4@courrier.vwlbk.mongodb.net/?retryWrites=true&w=majority&appName=Courrier

//mongodb://localhost:27017/courrier
mongoose.
connect("mongodb://localhost:27017/courrier")
.then(()=>{
    console.log("Hello Database")
})
.catch(()=>{
    console.log("Connection to Database Failed !")
})


/*    routes  */
app.use("/api/services/",require('./routes/routeService'))
app.use("/api/users/",require('./routes/routeUser'))
app.use("/api/post/",require('./routes/routePost'))

app.use(errorHanddler)
app.listen(5000,()=>console.log("server start at 5000 port"))