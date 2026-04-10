import axios from 'axios';

// Creiamo l'istanza personalizzata
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // L'URL base per tutte le chiamate
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;