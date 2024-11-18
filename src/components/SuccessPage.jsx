import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function SuccessPage() {
  const [canSendEmail, setCanSendEmail] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();
  const {user} = useAuth();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanSendEmail(false);
        }
        return prev - 1;
      });
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      navigate("/dash");
    }, 60000);
    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  const handleSendEmail = async () => {
    try {
      await axios.post("http://localhost:3000/api/sendEmail", {
        // Ejemplo de payload: puedes adaptarlo según tu backend
        subject: "Contrato firmado",
        body: "Aquí tienes el documento firmado.",
      });
      setEmailSent(true);
      alert("Correo enviado con éxito.");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("No se pudo enviar el correo. Inténtalo más tarde.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-4 text-black">
            ¡Documento firmado con éxito!
          </h1>
          <p className="text-gray-600 mb-6">
            Si lo deseas puedes recibir una copia del documento por correo electrónico durante
            los próximos <span className="font-bold">{timer} segundos</span>.
          </p>

          {canSendEmail ? (
            <button
              onClick={handleSendEmail}
              disabled={emailSent}
              className={`px-6 py-2 rounded-lg text-white ${
                emailSent
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-800"
              }`}
            >
              {emailSent ? "Correo enviado" : "Enviar por correo"}
            </button>
          ) : (
            <p className="text-red-500 font-semibold">
              El tiempo para enviar el documento por correo ha expirado.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
