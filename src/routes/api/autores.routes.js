const router = require('express').Router();

const { getAutores, createAutores } = require('../../controllers/autores.controller');

// GET /api/autores
router.get('/', getAutores);

// POST /api/autores
router.post('/', createAutores);

module.exports = router;