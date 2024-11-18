import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function HistorialContratos() {
  const [contratos, setContratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [error, setDocument] =useState(null); 

  useEffect(() => {
    
    const fetchContratos = async () => {
      try {
        console.log("contratos firmados: ")
        const response = await axios.get("http://localhost:3000/api/getContratosFirmados/" + user.numeroDoc);
        console.log(response.data.contratos)
        setContratos(response.data.contratos); 
      } catch (err) {
        SpeechSynthesisErrorEvent("Hubo un problema al cargar contratos");
        console.error(err);
        // console.error("Error al obtener contratos:", error);
      } finally {
        setLoading(false);
      }
    };
      fetchContratos();
  }, [user]);
  if (!user) return <p>Cargando usuario...</p>;

  return (
    <div className="px-6 my-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-black">
        <h2 className="text-xl font-bold mb-4">
          Historial de Contratos Firmados
        </h2>
        {loading ? (
          <p>Cargando historial...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul className="list-none space-y-4">
            {contratos.length > 0 ? (
              contratos.map((contrato) => (
                <ContratoItem key={contrato.id} contrato={contrato} />
              ))
            ) : (
              <p className="italic">No se han firmado contratos...</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
const ContratoItem = ({ contrato }) => (
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
  </li>
);

export default HistorialContratos;
