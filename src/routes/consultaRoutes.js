//rutas
const {Router} = require('express');
const { consultarComercios, consultarComerciosById } = require('../controller/consultaComercios');
const router = Router();

router.get('/', consultarComercios);

router.get('/usuario/:', consultarComerciosById);

module.exports = router;