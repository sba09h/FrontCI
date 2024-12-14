import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function SuccessPage() {
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { logout } = useAuth(); // Función para cerrar sesión

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);

    // Redirige a "/dash" después de 30 segundos
    const redirectTimeout = setTimeout(() => {
      navigate("/dash");
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout(); // Llamar a  cierre de sesión
      navigate("/login"); // Redirigir a login y cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-700">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-4 text-black">
            ¡Documento Firmado con Éxito!👌 <br />
            Revisa tu bandeja de entrada 📨📫... El consentimiento que has firmado ha sido enviado a tu correo
            personal registrado.
          </h1>
          <p className="text-gray-600 mb-4">
            Serás redirigido automáticamente al panel principal en{" "}
            <span className="font-bold text-blue-600">{timer} segundos</span>.
          </p>
          <div className="flex justify-center gap-4">
            
            <button
              onClick={handleLogout}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
