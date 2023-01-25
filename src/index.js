const morgan = require("morgan");
const cors = require('cors');
const { app, express, port } = require("./app")

app.listen(port, ()=>{
    console.log(port)
});

app.use(morgan('dev'));
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        "response": 123
    });
})
