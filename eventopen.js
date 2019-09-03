var fs = require('fs');
var rs = fs.createReadStream('index.html');
rs.on('open', function () {
    console.log('Open...');
});