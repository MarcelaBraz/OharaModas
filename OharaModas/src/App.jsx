import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Login from './components/Login';
import Profile from './components/Profile';
import Cadastro from './components/Cadastro'; // Página de cadastro

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Página de produtos */}
        <Route path="/produtos" element={<Produtos />} />

        {/* Página de contato */}
        <Route path="/contato" element={<Contato />} />

        {/* Página de cadastro */}
        <Route 
          path="/cadastro" 
          element={user ? <Navigate to="/profile" /> : <Cadastro />} 
        />

        {/* Página de login */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/profile" /> : <Login setUser={setUser} />} 
        />

        {/* Página de perfil */}
        <Route 
          path="/profile" 
          element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
