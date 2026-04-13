const express = require('express');
const router = express.Router();

const tournamentsController = require('../controller/tournamentsController');

router.post('/crea-evento', tournamentsController.createTournament);
router.get('/lista-tornei', tournamentsController.getAllTournaments);

module.exports = router;