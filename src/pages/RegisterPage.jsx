import {useForm} from "react-hook-form";
// import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function RegisterPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    //const {signup, isAuthtenticated } = useAuth;
    //const navigate = useNavigate()

    // useEffect(() => {
    //     if (isAuthtenticated) navigate("/sing");    
    // }, [isAuthtenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })
    return (
      <>
      <Navbar/>
      <div className="flex w-screen justify-self-center   max-w-md pd-10 pt-20 rounded-md">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Registro</h1>
        <form onSubmit={onSubmit}>
            <input type="text" {...register ("Nombre", {required: true})} 
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="Nombre es requerido"/>
            {errors.Nombre && <p className="text-red-500">Nombre es requerido </p>}

            <input type="email" {...register ("Email", {required: true})} 
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="Email es requerido"/>
            {errors.Nombre && <p className="text-red-500">Email es requerido </p>}

            <input type="password" {...register ("RUN", {required: true})} 
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="RUN es requerido"/>
            {errors.Nombre && <p className="text-red-500">RUN es requerido </p>}

            <input type="password" {...register ("Número Documento", {required: true})} 
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="Numero Documento es requerido"/>
            {errors.Nombre && <p className="text-red-500">Numero Documento es requerido </p>}

            <button type="submit" className="text-black bg-slate-50 rounded-md">Registrarse</button>
        </form>
        </div>


      </div>
      </>
      
    )
  }
  
  export default RegisterPage