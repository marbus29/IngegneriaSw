import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CreaEvento from './pages/CreaEvento';
// Importa la tua nuova Navbar
import { AuthProvider } from './context/AuthContext'; // Importa il Provider che abbiamo creato
import Navbar from './components/Navbar'; // Importa la tua nuova Navbar

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* La Navbar va fuori da Routes così resta fissa mentre cambi pagina */}
        <Navbar />
        {/* Questo contenitore assicura che il contenuto non finisca "sotto" la navbar */}
        <main className="pt-16 px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/crea-evento" element={<CreaEvento />} />
            {/* Aggiungi qui altre rotte come /campetti, /prenotazioni, ecc. */}
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;