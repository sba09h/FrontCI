import { createContext, useState, useContext, useEffect } from "react";
import { respuestaReq, loginReq, verifyTokenReq } from "../api/auth.js";
import Cookies from "js-cookie";


export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth requiere AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingDocuments, setPendingDocuments] = useState([]);
  

  const signup = async (user) => {
    try {
      const res = await respuestaReq(user);
      console.log(res.data);
      return {error: false}
    } catch (error) {
      console.log(error);
      return {error: true}
      // setErrors(error.response.data);
    }
  };

  const signin = async (user, documents) => {
    console.log(user);
    try {
      const res = await loginReq(user);
      console.log("login exitoso");
      setUser(res.data);
      setPendingDocuments(documents);
      setIsAuthenticated(true);
    } catch (error) {
      const errorMsg = Array.isArray(error.response.data)
        ? error.response.data
        : [error.response.data.message || "Error desconocido"];
      setErrors(errorMsg);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setPendingDocuments([]);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUser(JSON.parse(usuarioGuardado));
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("usuario", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);


  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        pendingDocuments,
        errors,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
