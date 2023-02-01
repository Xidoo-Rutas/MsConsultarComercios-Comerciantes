//rutas
const {Router} = require('express');
const { consultarComercios, consultarComerciosById, consultarComerciosByClientId } = require('../controller/consultaComercios');
const router = Router();

router.get('/', consultarComercios);

router.get('/comercio/:id', consultarComerciosById);

router.get('/comercio/cliente/:idcliente', consultarComerciosByClientId)

module.exports = router;