const express=require("express");
const cors=require("cors");
const cookieparser=require('cookie-parser');
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`app started at port ${PORT} ` );
})
app.use(express.json());



app.use(cors({
  origin:["http://localhost:5173","https://crm-frontend-negm.onrender.com"],
  credentials: true,          
}));
app.use(cookieparser());
const authroute=require('./Routes/routes');
app.use('/api',authroute);
app.get('/',(req,res)=>{
    res.send("Welcome to backend server");
})
const dbconnect=require('./Config/database');
dbconnect();
