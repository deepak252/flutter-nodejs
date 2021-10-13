const http  = require('http');

http.createServer(function (req, res) {
    res.write('OK'); //write a response to the client
    res.end(); //end the response
}).listen(8000);
