const conexionDB = require('../database/config');


module.exports = {

    //Listar todas los restaurantes disponibles asc
    getRestaurante: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM restaurante";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results)
        });
    },

    //Metodo para obtener una reserva por su ID
    getOnerestaurante: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM restaurante WHERE idrestaurante = '" + req.params.id + "'";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    },

    //Agregar una reserva 
    AgregarRestaurante: (req, res, next) => {
        const db = conexionDB;
        const data = {
            nombre: req.body.nombre, direccion: req.body.direccion, telefono: req.body.telefono };
        var sql = "INSERT INTO restaurante SET ?";
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },

    ActualizarRestaurante: (req, res, next) => {
        const db = conexionDB;
        const data = {
            nombre: req.body.nombre, direccion: req.body.direccion, telefono: req.body.telefono };
        var sql = "UPDATE restaurante SET ?"
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.json(results)
        });
    },

    EliminarRestaurante: (req, res, next) => {
        const db = conexionDB;
        var sql = "DELETE FROM restaurante WHERE idrestaurante = '" + req.params.id + "'";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    }
}