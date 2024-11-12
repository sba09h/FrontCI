import {BrowserRouter, Routes, Route} from "react-router-dom";
//import { AuthProvider } from "./context/AuthContext.jsx";
 

import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SignPage from "./pages/SingPage";



function App() {
  return (
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/sign" element={<SignPage/>}/> 
         </Routes>
      </BrowserRouter>
  )
}

export default App