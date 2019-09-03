var http = require('http');
var fs = require('fs');

fs.appendFile('index.html', '42 ', function (err) {
    if (err) throw (err);
    console.log('Done');
});

http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(80);