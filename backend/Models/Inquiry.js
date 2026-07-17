const mongoose=require("mongoose");

const inquiry=new mongoose.Schema({
    name:{
        type:String,
        maxLength:50,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    industry:{
        type:String,
        required:true,
    },
    companysize:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    budget: {
    type: String,
    required: true,
},
},{timestamps:true})
module.exports=mongoose.models.Inquiry ||mongoose.model("Inquiry",inquiry);