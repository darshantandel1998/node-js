var http = require('http');
var fs = require('fs');
var url = require('url');
var uc = require('upper-case');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var file = "." + q.pathname;
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Error File Not Found...');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(uc(data));
        return res.end();
    });
}).listen(80);