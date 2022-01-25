var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '218Madison!',
    database:'nodejsexpresslab'
});
connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Connected..!');
    }
});
module.exports = connection;