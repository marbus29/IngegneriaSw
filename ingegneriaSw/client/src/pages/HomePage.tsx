import Navbar from "../components/Navbar";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserCircle2, Mail, Lock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-12 color">
         <div className="relative">
           <div className="absolute -top-8.75 left-1/2 -translate-x-1/2 z-10">
             <div className="w-16 h-16 border border-balck/40 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/30 shadow-lg">
               <UserCircle2 size={35} strokeWidth={1} className="text-black/80" />
               <h1 className="text-3xl font-bold text-center color font-black">Home Page 🚀</h1>
             </div>
           </div>
          </div>
    </div>
  );
}