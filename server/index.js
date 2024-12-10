const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')



const app=express()
/*middleware*/
app.use(express.json())
app.use(cors())

/* database connection then start server at 5000 port*/
mongoose.connect("mongodb+srv://melazzaouy:FCy2sH9OLuKYB0n4@courrier.vwlbk.mongodb.net/?retryWrites=true&w=majority&appName=Courrier")
.then(()=>{
    console.log("Hello Database")
    app.listen(5000,()=>console.log("server start at 5000 port"))
})
.catch(()=>{
    console.log("Connection to Database Failed !")
})

/*    routes  */
app.use("/api/services/",require('./routes/routeService'))
app.use("/api/users/",require('./routes/routeUser'))

