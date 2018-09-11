const path=require('path')
const express=require('express')
var dirPath=path.join(__dirname+'/../public')

var port =process.env.Port || 3000;


var app=express();

app.use(express.static(dirPath))

app.listen(port,()=>{
    console.log(`Started ${port}`)
})
