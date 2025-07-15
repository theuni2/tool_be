const express= require('express');
const app = express();
const Competition= require('./routers/competition')
const userRouter = require('./routers/userRouter');
const cors = require('cors');
// const mongoose = require('mongoose');
const mongoose=require('mongoose')
const port = process.env.PORT || 3002;
dotenv= require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: true })); // for form data

app.use(cors({
    origin: 'http://localhost:3000',  // 👈 your Next.js frontend
  credentials: true,
}));
app.use(express.json());

app.use("/api/competitions", Competition)
app.use("/admin/user",userRouter);


mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:',err);
})



app.listen(port,()=>{
    console.log('server is running on port 3002');
});