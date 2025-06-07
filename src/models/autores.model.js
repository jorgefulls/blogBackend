const db = require('../config/db')


const getAutores = async (req, res) => {
    const [resultadoQuery] = await db.query('SELECT * FROM autores');

    if (resultadoQuery.length === 0) return null;
    return resultadoQuery;
}

const createAutor = (req, res) => {

}


module.exports = {
    getAutores,
    createAutor
}