const express = require('express');
const router = express.Router();

const tournamentsController = require('../controller/tournamentsController');

router.post('/crea-evento', tournamentsController.createTournament);
router.get('/tornei', tournamentsController.getAllTournaments);

// pre la prenotazione del torneo 
router.post('/tornei/:id/prenota', tournamentsController.prenotaTorneo);
module.exports = router;