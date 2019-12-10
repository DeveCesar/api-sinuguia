const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuarios');
const reservasControllers = require('../controllers/reservas');
const hotelesControllers = require('../controllers/hoteles');
const restauranteControllers = require('../controllers/restaurantes');
const pedidosControllers = require('../controllers/pedidos');

//Rutas para login
router.get('/infousuario/:id', usuariosControllers.getInfoUsuario);
router.post('/login', usuariosControllers.login);

//Rutas para reservas
router.get('/reserva', reservasControllers.getReservas);
router.get('/reserva/:id', reservasControllers.getOneReserva);
router.post('/reserva', reservasControllers.AgregarReserva);
router.put('/reserva/:id', reservasControllers.ActualizarReserva);
router.delete('/reserva/:id', reservasControllers.CancelarReserva);

//Rutas para hoteles
router.get('/hoteles', hotelesControllers.getHoteles);
router.get('/hoteles/:id', hotelesControllers.getOneHotel);
router.post('/hoteles', hotelesControllers.AgregarHotel);
router.put('/hoteles/:id', hotelesControllers.ActualizarHotel);
router.delete('/hoteles/:id', hotelesControllers.EliminarHotel);

//Rutas para restaurante
router.get('/restaurante', restauranteControllers.getRestaurante);
router.get('/restaurante/:id', restauranteControllers.getOnerestaurante);
router.post('/restaurante', restauranteControllers.AgregarRestaurante);
router.put('/restaurante/:id', restauranteControllers.ActualizarRestaurante);
router.delete('/restaurante/:id', restauranteControllers.EliminarRestaurante);

//Rutas para pedidos
router.get('/pedidos', pedidosControllers.getPedidos);
router.get('/pedidos/:id', pedidosControllers.getOnePedido);
router.post('/registrarPedido', pedidosControllers.AgregarPedido);
router.put('/pedidos/:id', pedidosControllers.ActualizarPedido);
router.delete('/pedidos/:id', pedidosControllers.CancelarPedido);



module.exports = router;
