const express = require('express');
const router = express.Router();
const pizzasControlers = require('../controllers/pizzasController');

router.get('/', pizzasControlers.listarPizzas);
router.get('/:id', pizzasControlers.mostrarPizzas);

module.exports = router;