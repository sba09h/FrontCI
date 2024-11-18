import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SignPage from "./pages/SingPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute.jsx";



function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

            <Route element= {<ProtectedRoute/>}> 
              <Route path="/sign" element={<SignPage/>}/> 
              <Route path="/dash" element={<Dashboard/>}/> 
            </Route>
          </Routes>
        </BrowserRouter>

      </AuthProvider>
  )
}

export default App