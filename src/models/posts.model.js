const db = require('../config/db')


const getPosts = async (req, res) => {
    const [resultadoQuery] = await db.query('SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON a.id = p.autores_id');

    if (resultadoQuery.length === 0) return null;
    return resultadoQuery;
}

const createPost = (req, res) => {

}


module.exports = {
    getPosts,
    createPost
}