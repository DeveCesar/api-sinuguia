const conexionDB = require('../database/config');


module.exports = {

    //Listar todas los hoteles disponibles asc
    getHoteles: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM hotel";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results)
        });
    },

    //Metodo para obtener una reserva por su ID
    getOneHotel: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM hotel WHERE idhotel = '" + req.params.id + "'";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    },

    //Agregar una reserva 
    AgregarHotel: (req, res, next) => {
        const db = conexionDB;
        const data = {
            nombre: req.body.nombre, direccion: req.body.direccion, telefono: req.body.telefono,
            precio: req.body.precio
        };
        var sql = "INSERT INTO hotel SET ?";
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },

    ActualizarHotel: (req, res, next) => {
        const db = conexionDB;
        const data = {
            nombre: req.body.nombre, direccion: req.body.direccion, telefono: req.body.telefono,
            precio: req.body.precio
        };
        var sql = "UPDATE hotel SET ?"
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.json(results)
        });
    },

    EliminarHotel: (req, res, next) => {
        const db = conexionDB;
        var sql = "DELETE FROM hotel WHERE idhotel = '" + req.params.id + "'";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    }
}