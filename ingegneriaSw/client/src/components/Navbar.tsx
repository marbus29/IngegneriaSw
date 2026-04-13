import { LayoutDashboard, Menu, LogOut, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Accediamo ai dati dell'utente e alla funzione logout dal Context
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log('Navbar - User State:', user);
  }, [user]);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">

      {/* Brand / Logo - Ora cliccabile per tornare alla home */}
      <Link to="/homepage" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <LayoutDashboard className="text-purple-600" />
        <span className="tracking-tight">Match Point</span>
      </Link>

      {/* Links Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/homepage" className="text-gray-600 hover:text-purple-600 font-medium transition">Home</Link>
        <Link to="/crea-evento" className="text-gray-600 hover:text-purple-600 font-medium transition">Prenota</Link>
        <Link to="/tornei" className="text-gray-600 hover:text-purple-600 font-medium transition">Tornei</Link>

        {/* 2. Logica Condizionale: Utente Loggato vs Ospite */}
        {user ? (
          <div className="flex items-center gap-4 border-l pl-8 ml-2 border-gray-100">
            <div className="flex items-center gap-2 text-gray-700">
              <User size={18} className="text-purple-600" />
              <span className="font-semibold">{user.email}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-1 text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg transition text-sm font-medium"
            >
              <LogOut size={16} />
              Esci
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition font-medium"
          >
            Accedi
          </Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 p-4 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top">
          <Link to="/homepage" className="text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/campetti" className="text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Prenota</Link>

          <div className="border-t pt-4">
            {user ? (
              <div className="flex flex-col gap-4">
                <span className="text-gray-800 font-bold">Ciao, {user.email}</span>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="text-red-500 flex items-center gap-2 font-medium"
                >
                  <LogOut size={18} /> Esci
                </button>
              </div>
            ) : (
              <Link to="/" className="text-purple-600 font-bold" onClick={() => setIsOpen(false)}>Accedi</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );


};

export default Navbar;