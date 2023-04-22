var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOLA MUNDO!', nombre:'YENDER', apellido:'OSORIO', cedula:'30626481', seccion:'Seccion3'});
});

module.exports = router;
