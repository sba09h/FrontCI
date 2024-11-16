import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const {register, handleSubmit, formState: {errors},} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (values) => {
        // signup(values)
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
      <div className="flex w-screen items-center pt-20 justify-center"> 
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">  
        <h1 className="text-2xl font-bold">Ingreso</h1>
        <form onSubmit={onSubmit}>
            <input type="email" {...register ("correo", {required: true})} 
              className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="Email es requerido"
            />
            {errors.Nombre && (<p className="text-red-500">Correo es requerido </p>
            )}

            <input type="password" {...register ("run", {required: true})} 
              className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="RUN es requerido"
            />
            {errors.Nombre && (<p className="text-red-500">RUN es requerido </p>
            )}

              <button type="submit" className="text-black bg-slate-50 rounded-md">Ingresar</button>
          </form>  
      </div>  

      </div>
      </>
      
    )
  }
  
  export default LoginPage