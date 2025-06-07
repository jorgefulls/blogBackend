const router = require('express').Router();

const { getPosts } = require('../../controllers/posts.controller');

// GET /api/posts
router.get('/', getPosts);

module.exports = router;