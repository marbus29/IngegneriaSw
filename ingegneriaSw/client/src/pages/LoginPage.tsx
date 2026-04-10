
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserCircle2, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../context/AxiosConfig'; // Importa l'istanza Axios personalizzata

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Nota: qui non scrivi più tutto l'URL, ma solo la parte finale!
      const response = await api.post('/login', { email, password });

      login(response.data.user);
      navigate('/homepage');
    } catch (error: any) {
      alert("Errore: " + (error.response?.data?.message || "Errore di rete"));
    }
  };

  return (

    // Centra il form perfettamente e aggiunge un po' di margine sopra per l'icona
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-12 color">


      <div className="relative">
        <div className="absolute -top-8.75 left-1/2 -translate-x-1/2 z-10">
          <div className="w-16 h-16 border border-balck/40 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/30 shadow-lg">
            <UserCircle2 size={35} strokeWidth={1} className="text-black/80" />
          </div>
        </div>
        {/* --- FORM COMPATTO (Larghezza ridotta a w-80 o max-w-sm) --- */}
        <form
          onSubmit={handleSubmit}
          className="relative p-6 pt-12 border rounded-4xl backdrop-blur-2xl bg-grey/20 shadow-2xl w-80 sm:w-96 border-black/30"
        >
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6 tracking-tight">
            Accedi
          </h2>

          {/* Campo Email */}
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

          {/* Campo Password */}
          <div className="relative mb-6">
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

          {/* Bottone Accedi (Più sottile) */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-blue-400 text-white py-2.5 rounded-xl font-bold shadow-md hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-xs"
          >
            Accedi
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-300 text-xs mb-1">Non sei registrato?</p>
            <Link
              to="/register"
              className="text-blue-700 text-sm font-bold hover:text-blue-900 transition-colors"
            >
              Crea un account ora
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}