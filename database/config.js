const mysql = require('mysql');

const conexionDB = mysql.createConnection({
    host: 'b7uvrfsuznphr5lcbbg3-mysql.services.clever-cloud.com',
    user: 'ukwsvoujvegsot10',
    password: 'Nkcr7arU83Z0MXn1P9E0',
    database: 'b7uvrfsuznphr5lcbbg3',
    port: 3306
});

 conexionDB.connect((err) => {
    if (err) throw err;
    console.log('DB_CONNECT...');
});


module.exports = conexionDB;