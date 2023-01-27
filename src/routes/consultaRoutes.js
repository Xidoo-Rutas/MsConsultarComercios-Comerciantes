//rutas
const {Router} = require('express');
const { consultarComercios } = require('../controller/consultaComercios');
const router = Router();

router.get('/',consultarComercios);

module.exports = router;