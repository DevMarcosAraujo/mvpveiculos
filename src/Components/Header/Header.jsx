import { useState } from "react";  // Importando useState
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Logo.svg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Usando useState para controlar o estado do menu

    // Função que alterna o estado do menu mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <nav className={`desktop-nav ${isMenuOpen ? 'hidden' : ''}`}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Sobre">Sobre</Link></li>
                            <li><Link to="/Veiculos">Veículos</Link></li>
                            <li><Link to="/Contatos">Contatos</Link></li>
                        </ul>
                    </nav>
                    <nav className={`nav-right ${isMenuOpen ? 'hidden' : ''}`}>
                        <ul>
                            <li><Link to="/Login">Login</Link></li>
                            <li><Link to="/Account">Account</Link></li>
                        </ul>
                    </nav>
                    {/* Botão de menu (ícone de hambúrguer) */}
                    <div className={`mobile-menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                <div className="close-btn" onClick={toggleMenu}>X</div>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/Sobre" onClick={toggleMenu}>Sobre</Link></li>
                    <li><Link to="/Veiculos" onClick={toggleMenu}>Veículos</Link></li>
                    <li><Link to="/Contatos" onClick={toggleMenu}>Contatos</Link></li>
                    <li><Link to="/Login" onClick={toggleMenu}>Login</Link></li>
                    <li><Link to="/Account" onClick={toggleMenu}>Account</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
