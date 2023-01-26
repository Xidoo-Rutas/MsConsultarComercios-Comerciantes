//conexion
const mongoose = require('mongoose');

const dataBaseConect = () => {
    try {
        mongoose.set("strictQuery", true);
        mongoose.connect('mongodb://localhost:27017');
        console.log('Base de datos online');
    } catch (error) {
        res.send(error);
        console.log(error);
    }
};

module.exports = dataBaseConect;