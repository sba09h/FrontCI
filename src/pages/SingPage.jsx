import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function SignPage() {
  const {id} = useParams();
  const {user} = useAuth();
  const [document, setDocument] = useState(null);
  const [numeroDoc, setNumeroDoc] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting]= useState(false);
  const navigation = useNavigate();
  
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() =>{
    const fetchDocument = async () => {
    const response = await axios.get(`http://localhost:3000/api/contratos/${id}`);
    console.log("response:", response)
    setDocument(response.data.contrato);
    };
    fetchDocument();
  }, []);
      if(!document) return <p>Cargando documento...</p>

    const firmarDocumento = async (event) =>{
      event.preventDefault();
      if(!isChecked){
        alert("Recuerda aceptar los terminos y condiciones del consentimiento")
        return 
      }  
      if (!numeroDoc.trim()){
          alert("Recuerda, debe ingresar un numero de documento")
      }
      const  body = {
        run: user.run, 
        numeroDoc: numeroDoc, 
        idContrato: id,
      };
      
      try {
        setIsSubmitting(true);
        const response = await axios.post(`http://localhost:3000/api/sign`, body);
        console.log(response.data);
        navigation("/sign-success");
      } catch (error) {
        console.error("Error al dirmar documento.", error);
        alert("Error al firmar documento, \n**¡VERIFICA TU NUMERO DE DOCUMENTO!**");
      } finally{
        setIsSubmitting(false);
    }

  } 
      
    return (
      <>
      <Navbar/>
      <div className="p-10">
        <div className="flex flex-col justify-center  font-bold text-3xl bg-r" >
        <a className="justify-center text-center" href="">CONSENTIMIENTO INFORMADO Y/O TÉRMINOS Y CONDICIONES</a> <br />
        <p className="font-bold"> {document.titulo} </p><br />
        <p className="font-light text-justify mx-20">Descripción: {document.contenido} </p><br />
        <p className="font-bold">Fecha: {formatDate(document.date)} </p>
        </div>
        <br />
        <form onSubmit={firmarDocumento} className="flex flex-col ">
          <label>
            <input className="space-x-2" type="checkbox" checked={isChecked} onChange={()=> setIsChecked(!isChecked)} /> Entiendo y Acepto Términos
          </label>

          <div className="flex items-center space-x-2 mt-2">
            <input 
              type="text" 
              name="run" 
              id="run"
              value={numeroDoc} 
              onChange={(event) => setNumeroDoc(event.target.value)}
              className="border-2 border-rose-600 bg-zinc-600 text-white px-4 py-2 rounded-md my-2" 
              placeholder="Debe ingresar número de documento para aceptar" 
            />
            <button type="submit" disabled={isSubmitting} className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-red-900">{isSubmitting ? "Firmando..." : "Firmar"}</button>
            
          </div>
        </form>
      </div>
      </>
    );
}
  
export default SignPage;