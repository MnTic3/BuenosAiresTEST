import 'styles/styles.css';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path='/admin/vehicles' element={<Vehicles/>} />
          <Route path='/admin/clients' element={<Clients/>} />
          <Route path="/admin" element={<AdminIndex />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;