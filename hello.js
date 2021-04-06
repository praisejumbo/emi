 

var http = require('http');
var dt = require('./class');


http.createServer(function (req, res) {
    
    res.end('Hello World!');


    exports.myDateTime = function () {
        return Date();
    }; 


    app.get("/", function (req,res,){

        res.send("this is an example of routing using the get method");
      })
}).listen(8080);