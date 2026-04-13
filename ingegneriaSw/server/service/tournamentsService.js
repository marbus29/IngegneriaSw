
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