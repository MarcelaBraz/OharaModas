import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha sidebar ao clicar em algum link
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="mobile-menu-icon" onClick={() => setSidebarOpen(true)}>
          <FaBars size={24} />
        </div>

        <div className="logo">
          <Link to="/" onClick={closeSidebar}>OharaModas</Link>
        </div>

        <nav className="nav desktop-nav">
          <ul>
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/produtos" onClick={closeSidebar}>Produtos</Link></li>
            <li><Link to="/contato" onClick={closeSidebar}>Contato</Link></li>
            <li>
              {isLoggedIn ? (
                <Link to="/perfil" onClick={closeSidebar}>Perfil</Link>
              ) : (
                <Link to="/cadastro" onClick={closeSidebar}>Cadastro</Link>
              )}
            </li>
            <li className="cart-search-wrapper">
              <Link to="/carrinho" className="cart-link" onClick={closeSidebar}>
                <FaShoppingCart />
              </Link>
              <div className="search-bar">
                <input type="text" placeholder="Buscar..." />
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar mobile */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Link to="/" onClick={closeSidebar}>OharaModas</Link>
          </div>
          <div className="close-icon" onClick={() => setSidebarOpen(false)}>
            <FaTimes size={24} />
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/produtos" onClick={closeSidebar}>Produtos</Link></li>
            <li><Link to="/contato" onClick={closeSidebar}>Contato</Link></li>
            <li>
              {isLoggedIn ? (
                <Link to="/perfil" onClick={closeSidebar}>Perfil</Link>
              ) : (
                <Link to="/cadastro" onClick={closeSidebar}>Cadastro</Link>
              )}
            </li>
            <li>
              <Link to="/carrinho" className="cart-link" onClick={closeSidebar}>
                <FaShoppingCart /> Carrinho
              </Link>
            </li>
            <li className="sidebar-search">
              <input type="text" placeholder="Buscar..." />
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
}

export default Header;
