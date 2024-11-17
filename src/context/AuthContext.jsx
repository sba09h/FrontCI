import { createContext, useState, useContext, useEffect } from "react";
import {repuestaReq, loginReq} from "../api/auth.js"

export const AuthContext = createContext();

export const useAuth = ( ) => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("useAuth requiere Authprovider");
    } 
    return context;
        
};


export const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null);
    const [isAuthtenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState();

    try {
        const signup = async (user) =>{
            const res = await repuestaReq(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        };
    } catch (error) {
        console.log(error.reponse)
        setErrors(error.reponse.data);
    };

    const signin = async (user) => {
        try {
            const res = await loginReq(user)
            console.log(res) 
        } catch (error) {
            if(Array.isArray(error.reponse.data)){
                return setErrors(error.reponse.data)
            }
            setErrors([error.reponse.data.message])
        }
    }

    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            }, 5000)
            return ()=> clearTimeout(timer)
        }
    }, [errors])

    return(
        <AuthContext.Provider value={{ signup, signin, user, isAuthtenticated, errors,

        }}>
            {children}
        </AuthContext.Provider>
    );
};