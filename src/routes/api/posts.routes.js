const router = require('express').Router();

const { getPosts, createPosts } = require('../../controllers/posts.controller');

// GET /api/posts
router.get('/', getPosts);


// POST /api/posts
router.post('/', createPosts);


module.exports = router;