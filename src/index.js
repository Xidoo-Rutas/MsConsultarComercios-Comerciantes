const morgan = require("morgan");
const cors = require('cors');
const { app, express, port } = require("./app");
const dataBaseConect = require("./database/conexion");

app.use(morgan('dev'));
app.use(cors('*'));
app.use('/', require('../src/routes/consultaRoutes'));

app.listen(port, ()=>{
    try {
        console.log(port)
        dataBaseConect();
    } catch (error) {
        console.log(error)
    }
});




