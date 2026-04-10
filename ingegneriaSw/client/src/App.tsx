import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
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
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<LoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
            {/* Aggiungi qui altre rotte come /campetti, /prenotazioni, ecc. */}  
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;