const Inquiry=require('../Models/Inquiry');
exports.getallinquiry = async (req, res) => {
  try {

    const inquiries = await Inquiry.find();
    return res.status(200).json({
      success: true,
      inquiries: inquiries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getinquirybyid=async(req,res)=>{
  try{
    const id=req.params.id;
    const inquiry = await Inquiry.findById(id);
    if(!inquiry){
      return res.status(400).json({
        message:"Inquiry Not Present In Database",
        success:false,
      })
    }
    return res.status(200).json({
      success: true,
      message:"Inquiry Fethed Successfully",
      inquiry: inquiry,
    });
  }catch(error){
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
exports.addinquiry=async(req,res)=>{
  try{
    const {name,company,email,country,industry,companysize,message,phone,budget} = req.body;
    
    const inquiry=await Inquiry.create({name,company,email,country,industry,companysize,message,phone,budget})
    return res.status(200).json({
      success: true,
      message: "Inquiry Added Successfully",
      inquiry:inquiry
    });
  }catch(error){
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


exports.deleteinquiry=async(req,res)=>{
    try{
        const id=req.params.id;
        const inquiry=await Inquiry.findByIdAndDelete(id);
        if(!inquiry){
            return res.status(404).json({
                message:"Inquiry Not Found In Database",
                success:false,
            })
        } 
        return res.status(200).json({
            message:"Inquiry Removed From Database Successfully",
            success:true,
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}