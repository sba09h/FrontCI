import { createContext, useState, useContext, useEffect } from "react";
import {respuestaReq, loginReq, verifyTokenReq } from "../api/auth.js"
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = ( ) => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth requiere AuthProvider");
    } 
    return context;
        
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pendingDocuments, setPendingDocuments] = useState([]);

    const signup = async (user) =>{
        try {   
            const res = await respuestaReq(user);
                console.log(res.data);
                setUser(res.data);
                setIsAuthenticated(true);
            } catch (error) {
            console.log(error.response)
            setErrors(error.response.data);
        };
    };
    

    const signin = async (user, documents) => {
            console.log(user)
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
        };
    };

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setPendingDocuments([]);
        setIsAuthenticated(false);
    };

    useEffect(()=> {
        async function checkLogin () {
            const cookies = Cookies.get();
            if(!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }

            try {
                const res = await verifyTokenReq(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;  
                }
                
                setIsAuthenticated(true);
                setUser(res.data);
            } catch (error) {
                console.log("error al verificar token", error);
                setIsAuthenticated(false);
                setUser(null);
                
            } finally{
                setLoading(false);
            }
        }
            checkLogin();
        }, []);

    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(()=>{
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);



    return(
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
            }}>
            {children}
        </AuthContext.Provider>
    );
};
