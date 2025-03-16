import { Link } from "react-router-dom"

// assets itens
import "./Footer.css"


 function Folter (){
    return(      
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>Somos uma loja especializada na venda de veículos de qualidade, oferecendo as melhores opções para você. </p>
        </div>

        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
          <li>
                <Link to="/">Home</Link></li>
                <li><Link to="/Sobre">Sobre</Link></li>
                <li><Link to="/Veiculos">Veiculos</Link></li>
                <li><Link to="/Contatos">Contatos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contate-nos</h3>
          <p>Email: contato@empresa.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Estudo. direitos reservados ao estudos em desenvolvedores.</p>
      </div>
    </footer>
    )
}
 export default Folter