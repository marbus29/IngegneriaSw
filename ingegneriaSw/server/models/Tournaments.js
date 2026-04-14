const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
  via: { type: String, required: true, unique: true },
  nome: { type: String, required: false },
  sport: { type: String, required: true },
  tipo: { type: String, required: true },
  organizzatore: { type: String, required: true },
  email:{type: String, required: true, unique: true},
  postiDisponibili: { type: Number, required: true },
  partecipanti: { type: [String], default: [] },
});

module.exports = mongoose.model('Tournament', TournamentSchema);