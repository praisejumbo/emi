 

var http = require('http');
var dt = require('./class');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World!');


    exports.myDateTime = function () {
        return Date();
    }; 
}).listen(8080);