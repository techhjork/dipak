const express = require("express");
const app = express()
app.use(express.json())



app.get("/",(req,res)=>{
  res.send("This is our api");
})

app.listen(3000)
