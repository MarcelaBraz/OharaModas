import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Arquivo de estilos (opcional)

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>OharaModas</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
