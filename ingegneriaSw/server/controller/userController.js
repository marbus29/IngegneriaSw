const userService = require('../service/userService');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.authenticateUser(email, password);
    if (user) {
      res.status(200).json({ message: "Login effettuato", user: user });
    } else {
      res.status(401).json({ message: "Credenziali errate" });
    }
  } catch (error) {
    res.status(500).json({ message: "Errore del server" });
  }
};

exports.register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: "Utente creato correttamente!", user });
  } catch (error) {
    res.status(400).json({ message: "Errore nella creazione utente", error: error.message });
  }
};