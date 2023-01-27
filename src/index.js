const morgan = require("morgan");
const cors = require('cors');
const { app, express, port } = require("./app");
const dataBaseConect = require("./database/conexion");

app.use(morgan('dev'));
app.use(cors());

app.listen(port, ()=>{
    try {
        console.log(port)
        dataBaseConect();
    } catch (error) {
        console.log(error)
    }
});




