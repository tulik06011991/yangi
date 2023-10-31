const express = require("express")
const mongoose = require("mongoose")
const Data = require("./model/modelSchema")
const router = express.Router()

  router.post("/", async (req, res) =>{
    try {
       
        

        const data = await Data.create(req.body)
        return res.status(201).json(data)
        }
     catch (error) {
        return res.status(500).json({message: error.message})
    }
  })
  router.get("/", async (req, res) =>{
    try {
        const data = await Data.find()
        return res.status(201).json(data.reverse())
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
  })
  router.put("/:id",  async (req, res) =>{
    try {
      if(!req.body.name||
        !req.body.title||
        !req.body.image){
          return res.status(400).send({message: "send all required"})
        }
        const {id} = req.params;
        console.log(id)
        const result = await Data.findByIdAndUpdate(id, req.body)
        if(! result){
          return res.status(404).send({message: `data not updated`})
        }
        return res.status(200).send({message: "successfully"})
      
    } catch (error) {
      console.log(error.message);
      res.status(500).send({message: error.message.code})
      
    }
  })
  



  router.get("/:id", async (req, res) =>{
    try {
        const {id} = req.params
       
        const data = await Data.findById(id,req.body)

        if(!data){
            return res.status(404).send(`No data with id:${id}`)
        }
       
        return res.status(201).json(data)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
  })




  


  router.delete("/:id", async (req, res) =>{
    try {
        const {id} = req.params
        
        const data = await Data.findByIdAndDelete(id)
        if(!data){
            return res.status(404).json(`No data with id:${id}`)
        }
        
        return res.status(200).send(`data deleted`)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
  })

  


module.exports = router