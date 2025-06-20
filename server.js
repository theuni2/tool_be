const express= require('express');
const app = express();

const mongoose=require('mongoose')


mongoose.connect('mongodb+srv://infocareerdiscovery:oJuUY6Bw1W8zAvxu@cluster0.zhnrbxm.mongodb.net/',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:',err);
})

app.listen(3002,()=>{
    console.log('server is running on port 3002');
});