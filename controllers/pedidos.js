const conexionDB = require('../database/config');

module.exports = {

    //Listar todas las reservas disponibles
    getPedidos: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM t_pedidos ";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    //Metodo para obtener una reserva por su ID
    getOnePedido: (req, res, next) => {
        const db = conexionDB;
        var sql = "SELECT * FROM t_pedidos WHERE idpedido = " + req.params.id + "";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    //Agregar una reserva 
    AgregarPedido: (req, res, next) => {
        const db = conexionDB;
        const data = {
            documento: req.body.documento, nombre: req.body.nombre, apellido: req.body.apellido,
            telefono: req.body.telefono, correo: req.body.correo
        };
        var sql = "INSERT INTO t_pedido SET ?";
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    ActualizarPedido: (req, res, next) => {
        const db = conexionDB;
        var sql = "UPDATE t_pedido SET documento = '" + req.body.documento + "', nombre = '" + req.body.nombre + "', apellido = '" + req.body.apellido +
            "', telefono = '" + req.body.telefono + "', correo = '" + req.body.correo + "'  ";
        var query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    },

    CancelarPedido: (req, res, next) => {
        const db = conexionDB;
        var sql = "DELETE FROM t_pedido WHERE idpedido = " + req.params.id + "";
        var query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
        db.end();
    }
}