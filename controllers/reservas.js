const conexionDB = require('../database/config');


module.exports = {

    //Listar todas las reservas disponibles
    getReservas: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM t_reserva ";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    //Metodo para obtener una reserva por su ID
    getOneReserva: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM t_reserva WHERE idreserva = " + req.params.id + "";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    //Agregar una reserva 
    AgregarReserva: (req, res, next) => {
        const db = conexionDB;
        const data = {
            documento: req.body.documento, nombre: req.body.nombre, apellido: req.body.apellido,
            telefono: req.body.telefono, correo: req.body.correo
        };
        var sql = "INSERT INTO t_reserva SET ?";
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    ActualizarReserva: (req, res, next) => {
        const db = conexionDB;
        var sql = "UPDATE t_reserva SET documento = '" + req.body.documento + "', nombre = '" + req.body.nombre + "', apellido = '" + req.body.apellido +
            "', telefono = '" + req.body.telefono + "', correo = '" + req.body.correo + "'  ";
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    CancelarReserva: (req, res, next) => {
        const db = conexionDB;
        var sql = "DELETE FROM t_reserva WHERE idreserva = " + req.params.id + "";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    }
}