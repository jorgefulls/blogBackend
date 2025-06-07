const Autor = require('../models/autores.model')

const getAutores = async (req, res) => {
    const autor = await Autor.getAutores();
    res.json(autor);
}

const createAutores = async (req, res) => {
    const result = await Autor.insert(req.body);
    const autor = await Autor.selectById(result.insertId);
    res.json(autor);
}

module.exports = {
    getAutores,
    createAutores
}