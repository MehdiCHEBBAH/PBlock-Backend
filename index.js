var http = require('http');
const PORT = process.env.PORT || 8080;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(PORT);