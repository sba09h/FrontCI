import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar"
import axios from "axios";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function LoginPage() {

  const {register, handleSubmit, formState: {errors},} = useForm();
  const {signin, errors: sigErrors} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
        signup(values)
        console.log("test")
        try {
          const respuesta = await axios.post("http://localhost:3000/api/login", values);
          const data = JSON.stringify(respuesta.data)
          localStorage.setItem("usuario", data)
          navigate("/dash")
        } catch (error) {
          console.error(error)
        }   
    })

    return (
      <>
      <Navbar/>
      <NavLink to= "/dash">
      <div className="flex w-screen items-center pt-20 justify-center"> 
        {sigErrors.map((error, i) => (
            <div className="bg-red-500 pd-2 text-white text-center my-2">
              {error}
            </div>
        ))}

      <div className="bg-zinc-800 max-w-md w-full p-5 rounded-md">  
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          
          <input type="email" {...register ("correo", {required: true})} 
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="Email es requerido"/>
          {errors.correo && (<p className="text-red-500">Correo es requerido </p>)}

          <input type="password" {...register ("run", {required: true})} 
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="RUN es requerido"/>
          {errors.run && (<p className="text-red-500">RUN es requerido </p>)}

          <button type="submit" className="text-black bg-slate-50 rounded-md">Login</button>                    
          
        </form>
          
        <p className="flex gap-x-2 justify-between py-8">
              ¿No tienes una cuenta aún? <Link to="/register">Registro</Link>
        </p>
      </div>  

      </div>
      </NavLink>
      
      </>
      
    )
  }
  
  export default LoginPage;