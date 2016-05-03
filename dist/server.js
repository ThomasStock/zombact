'use strict';

const http = require('http');

const port = process.env.PORT || 8080;
const ip = process.env.IP || "0.0.0.0";

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, ip);

console.log('Server running at http://' + ip + ':' + port);