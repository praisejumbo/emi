const http = require("http");
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require("path");
const{ pathToFileURL  }= require("url");
const{ time}= require("console");
const server= http.createServer(app);



app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());






app.get("/login", function (req, res) {
    res.send("this is the login page");
  });
  
  app.get("/", function (req, res) {
    res.json(req,body);
  });
  
  app.post("/contact", (req, res)=> {
    const name= req.body.name;
    const user= req.body.user ;
    const time= req.body.time;
    const date= req.body.date;
    const email= req.body.email;
   
  
    res.render("contact", {
      name:name,
      user:user,
      time:time,
      date:date,
      email:email,
    });
  });
  
  
  app.listen(3000, function () {
    console.log("server is runing")
  });
  