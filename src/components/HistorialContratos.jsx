import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function HistorialContratos() {
  const [contratos, setContratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Renombrado a setError
  const { user } = useAuth();

  useEffect(() => {
    const fetchContratos = async () => {
      try {
        console.log("Contratos firmados: ");
        const response = await axios.get(
          `http://localhost:3000/api/getContratosFirmados/${user.numeroDoc}`
        );
        if (Array.isArray(response.data.contratos)) {
          setContratos(response.data.contratos);
        } else {
          throw new Error("El formato de la respuesta no es válido.");
        }
      } catch (err) {
        setError("Hubo un problema al cargar contratos");
        console.error("Error al obtener contratos:", err);
      } finally {
        setLoading(false);
      }
    };
    if (user?.numeroDoc) fetchContratos();
  }, [user]);

  if (!user) return <p>Cargando usuario...</p>;

  return (
    <div className="px-6 my-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-black">
        <h2 className="text-xl font-bold mb-4">
          Historial de Consentimientos Firmados
        </h2>
        {loading ? (
          <p>Cargando historial...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul className="list-none space-y-4">
            {contratos.length > 0 ? (
              contratos.map((contrato) => (
                <ContratoItem key={contrato._id} contrato={contrato} />
              ))
            ) : (
              <p className="italic">No se han firmado consentimientos...❌</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

const ContratoItem = ({ contrato }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <li className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between">
        <span className="font-semibold">{contrato.titulo}</span>
        <span>
          {new Date(contrato.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <p className="text-sm text-gray-600">{contrato.descripcion}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleModal}
      >
        Ver Consentimiento
      </button>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-xl font-bold mb-4">{contrato.titulo}</h2>
          <p className="mb-4 text-justify">{contrato.contenido}</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={toggleModal}
          >
            Cerrar
          </button>
        </Modal>
      )}
    </li>
  );
};

const Modal = ({ children, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={onClose} // Cerrar modal al hacer clic en el fondo oscuro
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-2/3 lg:w-1/2 relative"
      onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del contenido cierre el modal
    >
      {children}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  </div>
);

export default HistorialContratos;
