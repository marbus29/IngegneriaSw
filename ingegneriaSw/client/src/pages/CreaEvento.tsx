import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, MapPin, Trophy, Users } from 'lucide-react';
import api from '../context/AxiosConfig';
import { useAuth } from '../context/AuthContext';

export default function CreaEvento() {
    const [via, setVia] = useState('');
    const [nome, setNome] = useState('');
    const [sport, setSport] = useState('');
    const [tipo, setTipo] = useState('');
    const [organizzatore, setOrganizzatore] = useState('');
    const [email, setEmail] = useState('');
    const [postiDisponibili, setPostiDisponibili] = useState('');

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dati correnti nello stato:", { via, sport, tipo, organizzatore, email, postiDisponibili });
        if (!user) {
            alert("Devi essere loggato per creare un evento.");
            navigate('/login');
            return;
        }

        try {
            // Mappiamo i dati esattamente come li vuole lo Schema
            const payload = {
                via,
                nome,
                sport,
                tipo,
                organizzatore,
                email,
                postiDisponibili: Number(postiDisponibili) // Conversione fondamentale
            };

            const response = await api.post('/crea-evento', payload);

            alert("Evento creato con successo!");
            navigate('/homepage'); // Decommentato per portarti via dopo il successo

        } catch (error: any) {
            // Mostriamo l'errore specifico del server (es: "via già esistente")
            const errorMsg = error.response?.data?.error || error.response?.data?.message || "Errore di rete";
            console.error("Dettaglio Errore:", error.response?.data);
            alert("Errore: " + errorMsg);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] pt-12">
            <div className="relative">
                <form
                    onSubmit={handleSubmit}
                    className="relative p-6 pt-12 border rounded-4xl backdrop-blur-2xl bg-white/20 shadow-2xl w-80 sm:w-96 border-white/30"
                >
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-6 tracking-tight">
                        Crea il tuo torneo
                    </h2>

                    {/* Via */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <MapPin size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="text"
                            placeholder="Via del campo"
                            value={via}
                            onChange={(e) => setVia(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Nome Campo */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <User size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="text"
                            placeholder="Nome Campo (Opzionale)"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                        />
                    </div>

                    {/* Sport */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Trophy size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="text"
                            placeholder="Sport (es. Tennis)"
                            value={sport}
                            onChange={(e) => setSport(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Tipologia */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="text"
                            placeholder="Tipologia (es. Singolo)"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Organizzatore */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Lock size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="text"
                            placeholder="Nome Organizzatore"
                            value={organizzatore}
                            onChange={(e) => setOrganizzatore(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email di contatto"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Posti Disponibili */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Users size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="number"
                            placeholder="Numero di posti"
                            value={postiDisponibili}
                            onChange={(e) => setPostiDisponibili(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                            min="1"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-blue-600 to-blue-400 text-white py-2.5 rounded-xl font-bold shadow-md hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-xs"
                    >
                        Crea Evento
                    </button>
                </form>
            </div>
        </div>
    );
}