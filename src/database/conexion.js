//conexion
const mongoose = require('mongoose');

const dataBaseConect = (req, res) => {
    try {
        mongoose.set("strictQuery", true);
        mongoose.connect('mongodb://localhost:27017/xidoo');
        console.log('Base de datos online');
    } catch (error) {
        res.send(error);
        console.log(error);
    }
};

module.exports = dataBaseConect;