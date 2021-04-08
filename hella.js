const http = require("http");
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
// var fs = require('fs')
const path = require("path");
// const addReqUser = require("./");
const{ pathToFileURL  }= require("url");
const{ time}= require("console");
const server= http.createServer(app);

// app.user(user);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.get("/user", function (req,res,){

//   res.send("this is an example of routing using the get method");
// })

// app.post("/user", function (req,res,){

//   res.send("this is an example of routing using the post method");
// })

// app.delete("/user", function (req,res,){

//   res.send("this is an example of routing using the delete method");
// })



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

// function addRequser(req,res,next){
//   req.user={name:"Emmanuel"};
//   next();
// }

// app.get("/addReqUser", addRequser, (req,res,)=>{

//   res.send(req.user.name);
// });

// // app.get("/json", function(req,res){
// //   constobj={message:}
// })

// app.get("./about", function (req, res) {
//   res.send("this is the about page");
// });

// app.get("/home", function (req, res) {
//   res.send("this is the home page");
// });

app.get("/login", function (req, res) {
  res.send("this is the login page");
});

app.get("/", function (req, res) {
  res.json(req.body);
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

