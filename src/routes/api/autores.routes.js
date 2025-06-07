const router = require('express').Router();

const { getAutores } = require('../../controllers/autores.controller');

// GET /api/autores
router.get('/', getAutores);

module.exports = router;