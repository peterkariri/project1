const express=require("express");

const app=express()//create an instance 

//define server routes

app.get('/',(req, res)=>{
    //database logic
    res.render("home.ejs",{uname:"peter"});//can have one or more argument and the second one is an object
})
app.get('/login',(req, res)=>{
    res.render("login.ejs")
})
app.get('/signup',(req, res)=>{
    res.render("signup here")
})

app.listen(8001,()=>{console.log("app is running on port 8001");})