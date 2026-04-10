import { Lock, Mail, Phone, User, UserCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Per cambiare pagina dopo il login
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    //axios 
    // 1. CAMBIA L'URL: da /api/login a /api/register
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, surname, telephone, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registrazione completata con successo!"); // Meglio dare un feedback!
      navigate('/login');
    } else {
      alert("Errore: " + data.message);
    }
  } catch (error) {
    console.error("Errore di connessione:", error);
    alert("Il server non risponde.");
  }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-12">
      <div className="relative">

        <div className="absolute -top-8.75 left-1/2 -translate-x-1/2 z-10">
          <div className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/30 shadow-lg">
            <UserCircle2 size={35} strokeWidth={1} className="text-white/80" />
          </div>
        </div>
        {/* --- FORM COMPATTO (Larghezza ridotta a w-80 o max-w-sm) --- */}
        <form 
          onSubmit={handleSubmit} 
          className="relative p-6 pt-12 border rounded-4xl backdrop-blur-2xl bg-white/20 shadow-2xl w-80 sm:w-96 border-white/30"
        >

          <h2 className="text-xl font-bold text-gray-800 text-center mb-6 tracking-tight">
            Registrati
          </h2>
          {/* per fare le immagini di utente password etc usiamo la libreria lucid react */} 
          {/* div con lo spazio per il nome */} 

          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User size={16} className="text-gray-700" />
            </div>
            <input
              type="name" 
              placeholder="Nome Utente" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
              required 
            />
          </div>
          
          {/* div con lo spazio per il cognome */}

          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User size={16} className="text-gray-700" />
            </div>
            <input
              type="surname" 
              placeholder="Cognome Utente" 
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
              required 
            />
          </div>

          {/* div con lo spazio per il telefono */} 

          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Phone size={16} className="text-gray-700" />
            </div>
            <input
              type="tel" 
              placeholder="Numero di Telefono" 
              value={telephone}
              //filtro on change per permettere di mettere solo numeri per il numero di telefono
              onChange={(e) => {
                const valoreInserito = e.target.value;
                // Il filtro: "Permetti solo stringa vuota OPPURE solo numeri da 0 a 9"
                if (valoreInserito === '' || /^[0-9]+$/.test(valoreInserito)) {
                  setTelephone(valoreInserito);
                }
              }}

              className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
              required 
              //da definire se requiredo o no 
            />
          </div>

          {/* div con lo spazio per il email */}

          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail size={16} className="text-gray-700" />
            </div>
            <input
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
              required  
            />
          </div>
          
          {/* div con lo spazio per il email */}

          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock size={16} className="text-gray-700" />
            </div>
            <input
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
              required  
            />
          </div>
          
          
          <button 
          type="submit" 
          className="w-full bg-linear-to-r from-blue-600 to-blue-400 text-white py-2.5 rounded-xl font-bold shadow-md hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-xs"
          >
          Registrati
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-300 text-xs mb-1">Hai un account ?</p>
            <Link 
              to="/login" className="text-blue-700 text-sm font-bold hover:text-blue-900 transition-colors"
            >
              Accedi
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;