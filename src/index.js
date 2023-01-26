const morgan = require("morgan");
const cors = require('cors');
const { app, express, port } = require("./app");
const dataBaseConect = require("./database/conexion");

app.listen(port, ()=>{
    console.log(port)
});

app.use(morgan('dev'));
app.use(cors());

dataBaseConect();

