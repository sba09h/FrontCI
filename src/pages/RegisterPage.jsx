import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthtenticated, errors: regErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthtenticated) navigate("/dash");
  }, [isAuthtenticated]);

  const onSubmit = handleSubmit(async (values) => {
    const respuesta = await signup(values);
    console.log(respuesta)
      if(!respuesta.error) {
          navigate("/login")
      }
  });
  return (
    <>
      <Navbar />
      <Link to="/dash"></Link>
      <div className="flex w-screen justify-self-center   max-w-md pd-10 pt-20 rounded-md">
        {regErrors.map((error, i) => (
          <div className="bg-red-500 pd-2 text-white text-center " key={i}>
            {error}
          </div>
        ))}
        <div className="bg-zinc-700 max-w-md w-full p-5 rounded-md">
          <h1 className="text-2xl font-bold">Registro</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("nombre", { required: true })}
              className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
              placeholder="Nombre completo es requerido"
            />
            {errors.nombre && (
              <p className="text-red-500">Nombre es requerido </p>
            )}

            <input
              type="email"
              {...register("correo", { required: true })}
              className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
              placeholder="Email es requerido"
            />
            {errors.correo && (
              <p className="text-red-500">Correo es requerido </p>
            )}

            <input
              type="password"
              {...register("run", { required: true })}
              className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
              placeholder="RUN es requerido"
            />
            {errors.run && <p className="text-red-500">RUN es requerido </p>}

            <input
              type="password"
              {...register("numeroDoc", { required: true })}
              className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
              placeholder="Numero Documento es requerido"
            />
            {errors.numeroDoc && (
              <p className="text-red-500">Numero Documento es requerido </p>
            )}

            <button type="submit" className="text-black bg-slate-50 rounded-md">
              Registrarse
            </button>
          </form>
          <p className="flex gap-x-2 justify-between py-8">
            ¿Ya tienes cuenta? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;