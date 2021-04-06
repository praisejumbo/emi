const http = require("http");
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var fs = require('fs')
const path = require("path");
const addReqUser = require("./");

// app.user(user);

app.get("/user", function (req,res,){

  res.send("this is an example of routing using the get method");
})

app.post("/user", function (req,res,){

  res.send("this is an example of routing using the post method");
})

app.delete("/user", function (req,res,){

  res.send("this is an example of routing using the delete method");
})



// app.get('/', (req, res) => {
//   // const pathToFile = path.join('my login form.html', "public", req.url);
//   fs.readFile('./public/my login form.html', "utf8", function (err, data) {
//   console.log(data);
//   res.send(data);

// })
// })
// if (err) {
//   console.dir(err);
//   res.writeHead(505, { "Content-Type": "text/plain" });
//   return res.end("File Not Found");
// }

function addRequser(req,res,next){
  req.user={name:"Emmanuel"};
  next();
}

app.get("/addReqUser", addRequser, (req,res,)=>{

  res.send(req.user.name);
});

// // app.get("/json", function(req,res){
// //   constobj={message:}
// })

app.get("./about", function (req, res) {
  res.send("this is the about page");
});

app.get("/home", function (req, res) {
  res.send("this is the home page");
});

app.get("/login", function (req, res) {
  res.send("this is the login page");
});

app.listen(3000, function () {
  console.log("server is runing")
});