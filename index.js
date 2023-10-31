const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const Data = require("./model/modelSchema")
const cors = require("cors")
const Routers = require("./roter")





app.use(cors())
app.use(express.json())

app.use(Routers)
PORT=process.env.PORT

app.get("/", (req, res) =>{
    console.log("hello");
    return res.status(200).send(`welcome to MERN tutorial `)
})

mongoose.connect("mongodb+srv://tolqinmirsaliyev:baliq@cluster0.mcq6gdt.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log(`database to connected`)
}).catch((error) =>{
    console.log(error)
})




app.listen(PORT, console.log("server running on server"))