const tournamentsService = require('../service/tournamentsService');
exports.getAllTournaments = async (req, res) => {
    try {
        const tornei = await tournamentsService.getAllTournaments();
        res.status(200).json(tornei);
    } catch (err) {
        res.status(500).json({ error: err.message });
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


exports.prenotaTorneo = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;

        const aggiornato = await tournamentsService.prenotazione(id, email);
        res.status(200).json(aggiornato);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
