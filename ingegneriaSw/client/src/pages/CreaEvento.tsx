import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserCircle2, Mail, Lock, Phone, User } from 'lucide-react';
import api from '../context/AxiosConfig';


export default function CreaEvento() {

    const [via, setVia] = useState('');
    const [nome, setNome] = useState('');
    const [sport, setSport] = useState('');
    const [tipologia, setTipologia] = useState('');
    const [organizzatore, setOrganizzatore] = useState('');
    const [mailOrganizzatore, setMailOrganizzatore] = useState('');
    const [postiDisponibili, setPostiDisponibili] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] pt-12">
            <div className="relative">
                <form
                    //onSubmit={handleSubmit}
                    className="relative p-6 pt-12 border rounded-4xl backdrop-blur-2xl bg-white/20 shadow-2xl w-80 sm:w-96 border-white/30"
                >
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-6 tracking-tight">
                        Crea il tuo evento
                    </h2>

                    {/* div con lo spazio per la via del campo */}
                    <div className="relative mb-4">
                        <input
                            type="via"
                            placeholder="Via"
                            value={via}
                            onChange={(e) => setVia(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* div con lo spazio per il nome del campo */}

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <User size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="nome"
                            placeholder="Nome Campo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* div con lo spazio per il sport */}

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <User size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="sport"
                            placeholder="Sport"
                            value={sport}
                            onChange={(e) => setSport(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>



                    {/* div con lo spazio per la tipologia */}

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="tipologia"
                            placeholder="Tipologia"
                            value={tipologia}
                            onChange={(e) => setTipologia(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* div con lo spazio per il organizzatore */}

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Lock size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="organizzatore"
                            placeholder="Organizzatore"
                            value={organizzatore}
                            onChange={(e) => setOrganizzatore(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* div con lo spazio per la mail dell'organizzatore */}

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="mailOrganizzatore"
                            placeholder="mail Organizzatore"
                            value={mailOrganizzatore}
                            onChange={(e) => setMailOrganizzatore(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2.5 bg-white/40 border-none rounded-xl text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                            required
                        />
                    </div>
                    {/* div con lo spazio per la mail dell'organizzatore */}

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-700" />
                        </div>
                        <input
                            type="mailOrganizzatore"
                            placeholder="mail Organizzatore"
                            value={mailOrganizzatore}
                            onChange={(e) => setMailOrganizzatore(e.target.value)}
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
                </form>


            </div >
        </div >
    );
}