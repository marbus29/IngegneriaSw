const User = require('../models/User');

// Logica per trovare un utente (Login)
exports.authenticateUser = async (email, password) => {
  return await User.findOne(
    { email, password },
    ["id", "email"]);
};

// Logica per creare un utente (Register)
exports.registerUser = async (userData) => {
  const nuovoUtente = new User(userData);
  return await nuovoUtente.save();
};
//funzioni che verranno chiamate dal controller, che a sua volta verrà chiamato dalle rotte. Qui mettiamo tutta la logica di business, ad esempio interagire con il database, validare dati, ecc.