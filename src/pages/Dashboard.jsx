import Navbar from "../components/Navbar.jsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import ContractsList from "../components/ContractsList.jsx";
import HistorialContratos from "../components/HistorialContratos.jsx";

function Dashboard() {
  const { isAuthenticated, user, pendingDocuments } = useAuth();
  const [selectedContract, setSelectedContract] = useState("");
  const navigate = useNavigate();

  const handleContractChange = (event) => {
    selectedContract(event.target.value); //error??
  };
  const handleButtonClick = () => {
    if (selectedContract) {
      navigate(`/sign/${selectedContract}`);
    } else {
      alert("Por favor selecciona un tipo de contrato.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex pt-20 justify-center">
        <div
          className="flex flex-col w-2/4 bg-zinc-700 rounded-md"
          style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
        >
          <h1 className="font-semibold text-3xl py-5 ">Firma de Documentos</h1>
          <div>
            <p className="pt-3 ">
              <strong>Nombre:</strong> {user.nombre || "No disponible"}
            </p>
          </div>
          <ContractsList />
          <HistorialContratos />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
