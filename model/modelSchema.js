const mongoose= require("mongoose")


const newSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    }

})

const Model = mongoose.model("task", newSchema)

module.exports = Model
