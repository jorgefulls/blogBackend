const Post = require('../models/posts.model')

const getPosts = async (req, res) => {
    const { autor } = req.query;
    const post = await Post.getPosts(autor);
    res.json(post);
}

const createPosts = async (req, res) => {
    const result = await Post.insert(req.body);
    const post = await Post.selectById(result.insertId);
    res.json(post);
}

module.exports = {
    getPosts,
    createPosts
}