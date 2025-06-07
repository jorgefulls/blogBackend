const db = require('../config/db')

const selectById = async (autorId) => {
    const [resultadoQuery] = await db.query(`
        SELECT *
          FROM autores
         WHERE id = ?`, [autorId]
    );
    if (resultadoQuery.length === 0) return null;
    return resultadoQuery[0];
}

const getAutores = async (req, res) => {
    const [resultadoQuery] = await db.query(`
        SELECT * 
          FROM autores`
    );
    if (resultadoQuery.length === 0) return null;
    return resultadoQuery;
}

const insert = async ({ nombre, email, imagen }) => {
    const [resultadoInsert] = await db.query(`
        INSERT INTO autores (nombre, email, imagen)
        VALUES (?, ?, ?)`, [nombre, email, imagen]
    );
    return resultadoInsert;
}


module.exports = {
    selectById,
    getAutores,
    insert
}