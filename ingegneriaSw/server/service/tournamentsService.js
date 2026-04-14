
const { get } = require('mongoose');
const Tournament = require('../models/Tournaments');

exports.createTournament = async (tournamentData) => {
    // Crea una nuova istanza basata sullo schema
    const tournament = new Tournament(tournamentData);
    // Salva sul DB e restituisce il risultato
    return await tournament.save();
};

exports.getAllTournaments = async () => {
    return await Tournament.find({});
};

// Funzione per prenotare un posto in un torneo
exports.prenotazione = async (tournamentId,userEmail) => { 
    // Trova il torneo per ID
    const torneo = await Tournament.findById(tournamentId);
    // Controlla se il torneo esiste, se ci sono posti disponibili e se l'utente è già prenotato
    if(!torneo) {
        throw new Error("Torneo non trovato");
    }
    if(torneo.postiDisponibili <= 0) {
        throw new Error("Posti esauriti");
    }
    if(torneo.partecipanti.includes(userEmail)) {
        throw new Error("Utente già prenotato");
    }
    // Aggiungi l'utente alla lista dei partecipanti e decrementa i posti disponibili
    torneo.partecipanti.push(userEmail);
    torneo.postiDisponibili -= 1;
    // Salva le modifiche al torneo
    await torneo.save();
    return torneo;
};
