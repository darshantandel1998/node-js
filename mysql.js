const mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected...');
    var sql = 'DELETE FROM student WHERE name = "Name 3"';
    con.query(sql, function (err, result, filelds) {
        if(err) throw err;
        console.log(result);
    });
});