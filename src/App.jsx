import 'styles/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from 'pages/Register';
import Login from 'pages/Login';
import Admin from 'pages/Admin';
import Index from 'pages/Index';
import PublicLayout from 'layouts/PublicLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;