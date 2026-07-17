const express=require('express');
const router=express.Router();
const{getallinquiry,deleteinquiry,addinquiry}=require('../Controllers/inquiryController');
router.get("/fetch-inquiries",getallinquiry);
router.post('/add-inquiry',addinquiry);
router.delete("/delete-inquiry/:id",deleteinquiry);
module.exports=router;