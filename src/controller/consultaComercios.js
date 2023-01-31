//consulta
const comercios = require('../database/model')

const consultarComercios = (req, res) => {
    try {
        comercios.find()
        .then((doc)=>{
            res.send(doc);
        }).catch(err=>{
            res.send(500).send(err);
        });
    } catch (error) {
        res.send(error);
        console.log(error);
    };
};

const consultarComerciosById = (id) => {
    try {
        comercios.findById(id)
        .then((doc) =>{
            res.send(doc)
        }).catch(err=>{
            res.send(500).send(err)
        });
    } catch (error) {
        res.send(error)
    }
};

const consultarComerciosByClientId = () => {

};

module.exports = {
    consultarComercios,
    consultarComerciosById
}