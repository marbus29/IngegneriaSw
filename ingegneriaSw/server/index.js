const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importiamo le rotte
const userRoutes = require('./routes/userRoutes');
const tournamentsRoutes = require('./routes/tournamentsRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connessione DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connesso a MongoDB Locale"))
  .catch((err) => console.log("❌ Errore connessione DB:", err));

// --- USO DELLE ROTTE ---
// Tutte le rotte in userRoutes inizieranno con /api
app.use('/api', userRoutes); 
app.use('/api', tournamentsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});