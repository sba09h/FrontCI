import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className=" bg-white pt-4 px-4">
      <ul className="flex justify-between  text-black px-5">
        <Link to="/">
          <div>
            <li className="site-title font-extrabold text-black text-6xl">
              C.I.D.
            </li>
            <li className="font-light text-black">
              Consentimiento Informado Digital
            </li>
          </div>
        </Link>

        <div className="flex m-5 pt-5 text-xl ">
          {isAuthenticated ? (
            <>
              <p className="font-bold flex px-10">
                Bienvenido! {user.nombre || "No disponible"}
              </p>
              <li>
                <Link
                  className="px-4 transition ease-in-out delay-150 bg-slate-900 text-white hover:-translate-y-1 hover:scale-110 hover:hover:bg-gray-600duration-300 rounded-md"
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  Salir
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/register"
                  className="px-4 mr-8 transition ease-in-out delay-150 bg-slate-900 text-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 rounded-md"
                >
                  Registro
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="px-4 mr-8 transition ease-in-out delay-150 bg-slate-900 text-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 rounded-md"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
