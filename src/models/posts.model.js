const db = require('../config/db')

const selectById = async (postId) => {
    const [resultadoQuery] = await db.query(`
        SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON a.id = p.autores_id AND p.id = ?`, [postId]
    );
    if (resultadoQuery.length === 0) return null;
    return resultadoQuery[0];
}

const getPosts = async (req, res) => {
    const [resultadoQuery] = await db.query(`
        SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON a.id = p.autores_id`
    );
    if (resultadoQuery.length === 0) return null;
    return resultadoQuery;
}

const insert = async ({ titulo, descripcion, fecha_creacion, categoria, autores_id }) => {
    const [resultadoInsert] = await db.query(`
        INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autores_id)
        VALUES (?, ?, ?, ?, ?)`, [titulo, descripcion, fecha_creacion, categoria, autores_id]
    );
    return resultadoInsert;
}


module.exports = {
    selectById,
    getPosts,
    insert
}