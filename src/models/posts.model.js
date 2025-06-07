const db = require('../config/db')

const selectById = async (postId) => {
    const [resultadoQuery] = await db.query(`SELECT p.*, a.nombre, a.email, a.imagen
                                               FROM posts p
                                              INNER JOIN autores a
                                                 ON a.id = p.autores_id
                                                AND p.id = ?`, [postId]
    );
    if (resultadoQuery.length === 0) return null;
    return resultadoQuery[0];
}

const getPosts = async (autorId) => {
    /* Si no pasan parámetro 'autor' en la URL de la request, se hará búsqueda de todos los posts.
     Si lo pasan, devuelve solo los posts de ese autor.
     El enunciado no especifica si lo que ha de venir en la URL es el id del autor o el nombre. En caso de ser el nombre,
     se recuperaría el id del autor primero antes de hacer la consulta de sus posts.
    */
    let consulta = `SELECT p.*,
                           a.nombre,
                           a.email,
                           a.imagen
                       FROM posts p
                      INNER JOIN autores a
                         ON a.id = p.autores_id`
    if (autorId) {
        consulta = `SELECT p.*,
                           a.nombre,
                           a.email,
                           a.imagen
                      FROM posts p
                     INNER JOIN autores a
                        ON a.id = p.autores_id
                       AND a.id = ?`
    }
    const [resultadoQuery] = await db.query(consulta, [autorId]);
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