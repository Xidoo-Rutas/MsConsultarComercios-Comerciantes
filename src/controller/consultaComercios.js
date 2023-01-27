//consulta
const {comercios} = require('../database/model')

const consultarComercios = (req, res) => {
    try {
        comercios.find()
        .then((doc)=>{
            res.send(doc)
        }).catch(err=>{
            res.send(500).send(err)
        })
    } catch (error) {
        res.send(error);
        console.log(error);
    }
    


};

const consultarComerciosById = () => {

};

const consultarComerciosByClientId = () => {

};

module.exports = {
    consultarComercios
}