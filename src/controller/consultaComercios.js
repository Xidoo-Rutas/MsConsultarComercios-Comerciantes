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
    };
};


const consultarComerciosById = (req,res) => {
    comercios.findById(req.params.id, (err, docs) => {
        if (err) return res.send(err);
        if (docs) return res.send(docs);
})}

const consultarComerciosByClientId = (req, res) => {
    comercios.find({idUsuario: req.params.idcliente}, (err, docs)=>{
        if (err) return res.json({err});
        if (docs) return res.send(docs);
    })
};

module.exports = {
    consultarComercios,
    consultarComerciosById,
    consultarComerciosByClientId
}