var http = require('http');
var dt = require('./user.routes.js');


http.createServer(function (req,res) {

    res.writteHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(4000);