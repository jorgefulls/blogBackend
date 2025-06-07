const Autor = require('../models/posts.model')

const getPosts = async (req, res) => {
    const post = await Autor.getPosts();
    res.json(post);
}

const createPosts = async (req, res) => {

}

module.exports = {
    getPosts,
    createPosts
}