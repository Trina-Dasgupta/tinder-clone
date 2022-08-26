import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//App config
const app=express();
const port=process.env.PORT || 8000;
 const connection_url=`mongodb+srv://trina:trina135@cluster0.cwk11pi.mongodb.net/?retryWrites=true&w=majority`

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    // pass in couple of parameters to our connection, make our connection smooth
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });


//API Endpoints

app.get('/',(req,res)=>{
    res.status(200).send("Hello world");
});

app.post('/tinder/cardS',(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
});
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data);
        }
    });
})


//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
