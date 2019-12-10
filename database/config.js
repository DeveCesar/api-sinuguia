const mysql = require('mysql');

const conexionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sinuguia'
});

 conexionDB.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});


module.exports = conexionDB;