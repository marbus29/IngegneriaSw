import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, MapPin, Trophy, Users } from 'lucide-react';
import api from '../context/AxiosConfig';
import { useAuth } from '../context/AuthContext';


export default function ListaTornei() {
    // 1. Stato per memorizzare l'array dei tornei
    const [tornei, setTornei] = useState([]);
    // 2. Stato per gestire il caricamento (opzionale ma consigliato)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTornei = async () => {
            try {
                // Chiamata GET: l'URL finale sarà baseURL + '/tornei'
                // Assicurati che nel backend la rotta sia router.get('/tornei', ...)
                const response = await api.get('/tornei');

                console.log("Dati ricevuti:", response.data);

                // Salviamo i dati nello stato
                setTornei(response.data);
            } catch (error) {
                console.error("Errore Axios:", error);
            } finally {
                // In ogni caso, smettiamo di mostrare il caricamento
                setLoading(false);
            }
        };

        fetchTornei();
    }, []);

    if (loading) return <div className="text-center mt-10">Caricamento in corso...</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Tornei Disponibili</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tornei.map((torneo: any) => (
                    <div key={torneo._id} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{torneo.nome || "Torneo senza nome"}</h3>

                        <div className="space-y-2 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <Trophy size={16} className="text-yellow-600" />
                                <span><strong>Sport:</strong> {torneo.sport}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-blue-600" />
                                <span><strong>Via:</strong> {torneo.via}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-purple-600" />
                                <span><strong>Posti:</strong> {torneo.postiDisponibili}</span>
                            </div>
                        </div>

                        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                            Iscriviti
                        </button>
                    </div>
                ))}
            </div>
            {tornei.length === 0 && <p className="text-center mt-10 text-gray-500">Nessun torneo trovato.</p>}
        </div>
    );
}