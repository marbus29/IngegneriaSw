import Navbar from "../components/Navbar";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserCircle2, Mail, Lock } from 'lucide-react';


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-12 color">
      <div className="relative">
        <h1 className="text-5xl text-center color font-bold">Match Point</h1>
        <h1 className="font-bold text-center color">Prenota il tuo campetto !</h1>


      </div>
    </div>
  );
}