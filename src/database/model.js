const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const comercios = new Schema({
    nombreNeocio: String,
    idUsuario: String,
    categoriaNegocio: String,
    direccionNegocio: String,
    numeroTelefonicoNegocio: String,
    descripcionNegocio: String,
    imagenesComercio: Array,
    diasApertura: Array,
    horarioApertura: Object

},
);

module.exports = mongoose.model('comercios', comercios);
