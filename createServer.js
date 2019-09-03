var http = require('http');
var url = require('url');
var dt = require('./dt');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>" + "Darshan Tandel" + "</h1>");
    var q = url.parse(req.url, true).query;
    res.write("Date: " + q.month + ", Year: " + q.year);
    res.end();
}).listen(80);