const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const conexionDB = require('./database/config');
const localDB = require('./database/config');
const rutas = require('./routes/index');
const cors = require('cors');
const morgan = require('morgan');
localDB;
conexionDB;
app.use((req, res, next) => {
  //configurar cabecera
  //para permitir el acceso a nuestra api de todos los dominios
  res.header('Access-Control-Allow-Origin', '*');
  //cabeceras necesarias para AJAX
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  //para salir del flujo y seguir
  next();
});
const puerto = process.env.PORT || 3000;

//Parsear aplicacion/json
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
router.get('/',express.static(__dirname + 'public'))
app.use('/api/', rutas);




//Servidor corriendo
app.listen(puerto, () => {
  console.log('Server corriendo el puerto...' + puerto);
});
