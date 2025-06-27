const express= require('express');
const app = express();
const Competition= require('./routers/competition')
const cors = require('cors');
// const mongoose = require('mongoose');
const mongoose=require('mongoose')
const port = process.env.PORT || 3002;


app.use(cors());
app.use(express.json());

app.use("/api/competitions", Competition)


mongoose.connect('mongodb+srv://infocareerdiscovery:oJuUY6Bw1W8zAvxu@cluster0.zhnrbxm.mongodb.net/',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:',err);
})



app.listen(port,()=>{
    console.log('server is running on port 3002');
});