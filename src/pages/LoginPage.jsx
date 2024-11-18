import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar"
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


function LoginPage() {

  const {register, handleSubmit, formState: {errors},} = useForm();
  const {signin, errors: sigErrors} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
          await signin(data);
          // const respuesta = await axios.post("http://localhost:5173/api/login", values);
          // const data = JSON.stringify(respuesta.data)
          // localStorage.setItem("usuario", data)
          navigate("/dash");
        } catch (error) {
          console.error("Error al iniciar sesión",error)
        }   
    })

    return (
      <>
        <Navbar/>
          <div className="flex w-screen items-center pt-20 justify-center"> 
            <div className="bg-zinc-700 max-w-md w-full p-5 rounded-md">  
              {sigErrors.map((error, i) => (
                  <div className="bg-red-500 pd-2 text-white text-center my-2"key={i}>
                    {error}
                  </div>
              ))}
              <h1 className="text-2xl font-bold">Login</h1>
              <form onSubmit={onSubmit}>
                
                <input type="email" {...register ("correo", {required: true})} 
                className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="Email es requerido"/>
                {errors.correo && (<p className="text-red-500">Correo es requerido </p>)}

                <input type="password" {...register ("run", {required: true})} 
                className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2" placeholder="RUN es requerido"/>
                {errors.run && (<p className="text-red-500">RUN es requerido </p>)}

                <button type="submit" className="text-black bg-slate-50 rounded-md px-4 py-2">Login</button>                    
                
              </form>
              
              <p className="flex gap-x-2 justify-between py-8">
                    ¿No tienes una cuenta aún? <Link to="/register">Registro</Link>
              </p>
            </div>  
          </div>
      </>
    );
  }
  
  export default LoginPage;