const tournamentsService = require('../service/tournamentsService');
exports.getAllTournaments = async (req, res) => {
    try {
        const tornei = await Tournament.find(); // Recupera tutti i documenti dal DB
        res.status(200).json(tornei);
    } catch (error) {
        res.status(500).json({ message: "Errore nel recupero dei tornei", error: error.message });
    }
};
exports.createTournament = async (req, res) => {
    try {
        // Estraiamo i dati dal body inviato dal frontend
        const nuovoTorneo = await tournamentsService.createTournament(req.body);
        res.status(201).json(nuovoTorneo);
    } catch (error) {
        // Se c'è un errore (es. via duplicata), rispondiamo con 400
        res.status(400).json({ 
            message: "Errore nella creazione torneo", 
            error: error.message 
        });
    }
};