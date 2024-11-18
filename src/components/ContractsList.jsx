import axios from "axios";
import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function ContractsList(){
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedContract, setSelectedContract] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContracts = async () => {
          try {
            const response = await axios.get("http://localhost:3000/api/contratos"); 
            if (!response) {
              throw new Error("Error al obtener los contratos");
            }
            console.log(response.data)
            setContracts(response.data.contratos); 
          } catch (err) {
            setError(err.message); 
          } finally {
            setLoading(false); 
          }
        };
        fetchContracts();
    }, []);

    const handleButtonClick = () =>{ 
        console.log("test contrato:", selectedContract);
        navigate("/sign/" + selectedContract);
    }

    const handleContractChange = (e) => {
        setSelectedContract(e.target.value);
    }

    if (loading) return <p>Cargando contratos...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Contratos disponibles</h2>
        <div style={{ margin: "20px 0" }}>
            <label htmlFor="contract-select">
              <strong>Selecciona el tipo de contrato:</strong>
            </label>
            <select
              id="contract-select"
              value={selectedContract}
              onChange={handleContractChange}
              style={{ display: "block", marginTop: "10px", padding: "10px", width: "100%" }}
            >
              <option className="font-medium text-black"value="">-- Selecciona una opción --</option>
              {
                contracts.map(contract => (
                    <option className="font-medium text-black" key={contract._id} value={contract._id}>
                        {contract.titulo}
                    </option>
                ))
              };
            </select>
            <button
            onClick={handleButtonClick}
            style={{padding: "10px 20px", backgroundColor: "#007BFF", color: "#FFF", border: "none", borderRadius: "5px", cursor: "pointer",
            }}> Ir al documento
          </button>
          </div>
      </div>
    );
};

export default ContractsList;