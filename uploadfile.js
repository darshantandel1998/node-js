const formidable = require('formidable');
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        var form = formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            var oldpath = files.filetoupload.path;
            var newpath = './upload/' + files.filetoupload.name;
            fs.copyFile(oldpath, newpath, (err) => {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        fs.readFile('form.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    }
}).listen(80);