var http = require('http');
var requestController = require('./controller/request.js');

http.createServer(requestController).listen(9999);
console.log('server has started listening at port 9999');
