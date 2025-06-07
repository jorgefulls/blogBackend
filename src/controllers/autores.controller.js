const Autor = require('../models/autores.model')

const getAutores = async (req, res) => {
    const autor = await Autor.getAutores();
    res.json(autor);
}

const createAutor = async (req, res) => {

}

module.exports = {
    getAutores,
    createAutor
}