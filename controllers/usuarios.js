const conexionDB = require('../database/config');

module.exports = {
    getInfoUsuario: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM usuarios u INNER JOIN personas d ON u.idusuario = d.ipersona WHERE u.idusuario = " + req.params.id + "";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },

    login: (req, res, next) => {
        const db = conexionDB;
        console.log(req.body);
        var sql = "SELECT * FROM usuarios WHERE correo = '" + req.body.correo + "' and clave = '" + req.body.clave + "' and rol = '" + req.body.rol + "'";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },

    registroUsuario: (req, res, next) => {

    }
}
