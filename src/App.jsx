import {BrowserRouter, Routes, Route, unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import React from "react";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SignPage from "./pages/SingPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute.jsx";
import SuccessPage from "./components/SuccessPage.jsx";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

          <Route element= {<ProtectedRoute/>}> 
            <Route path="/dash" element={<Dashboard/>}/> 
            <Route path="/sign/:id" element={<SignPage/>}/> 
            <Route path="/sign-success" element={<SuccessPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;