import express = require('express');
import './database';

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hello world');
})

app.listen(3333,()=>{
  console.log("server started")
})