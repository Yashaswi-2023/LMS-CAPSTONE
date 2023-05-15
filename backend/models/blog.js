

const mongoose=require("mongoose")
const blogschema=new mongoose.Schema({
    createdBy :{type:String},
    title:{type: String},
    imglink:{type: String},
    blogdesc:{type: String},    
    date :{type : Date},
})
module.exports=mongoose.model("blogtable",blogschema);