import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/sub",(req,res)=>{
    res.render("index.ejs",{subb:"Thankyou"});
})
app.get("/about",(req,res)=>{
    res.render("about.ejs")
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})
app.get("/started",(req,res)=>{
    res.render("started.ejs")
})
app.listen(port,(req,res)=>{
    console.log(`Server running on ${port}`);
    
})