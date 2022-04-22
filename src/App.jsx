import 'styles/styles.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from 'pages/Register';
import Login from 'pages/Login';
import AdminIndex from 'pages/admin/AdminIndex';
import Index from 'pages/Index';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import Vehicles from 'pages/admin/Vehicles';
import Clients from 'pages/admin/Clients';
import { DarkModeContext } from 'context/DarkMode';
import Users from 'pages/admin/Users';
import Profile from 'pages/admin/Profile';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log("Dark Mode: ", darkMode);
  }, [darkMode])


  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<PrivateLayout />}>
              <Route path='/admin/vehicles' element={<Vehicles />} />
              <Route path='/admin/profile' element={<Profile />} />
              <Route path='/admin/users' element={<Users />} />
              <Route path='/admin/clients' element={<Clients />} />
              <Route path="/admin" element={<AdminIndex />} />
            </Route>


            <Route element={<PublicLayout />}>
              <Route path='/' element={<Index />} />
            </Route>
          </Routes>
        </Router>
    </DarkModeContext.Provider>
  );
}

export default App;