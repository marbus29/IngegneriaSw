import RegisterForm from "../components/RegisterForm";
import fotoSito from '../assets/fotosito.png';
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${fotoSito})` }}>
      <RegisterForm />
    </div>
  );
}