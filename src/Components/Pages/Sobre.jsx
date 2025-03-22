import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "./sobre.css"

//caminhos da imagens 
import logo from '../../assets/Logo.png';
import car1 from '../../assets/bmw01.jpg';
import qualityIcon from '../../assets/bmw02.jpg';
import financingIcon from '../../assets/lamborghini01.svg';
import serviceIcon from '../../assets/mustang.svg';

function Sobre() {
    return(
        <>
        <Header />
        <div className="about-container">
      <header className="about-header">
        <img src={logo} alt="Logo da Loja" className="about-logo" />
        <h1>Sobre Nós</h1>
      </header>

      <section className="about-content">
        <div className="about-text">
          <p>
            Bem-vindo à <strong>MVP Veiculos</strong>! Somos uma concessionária especializada em carros
            novos e seminovos, com uma vasta experiência no mercado automotivo. Desde nossa fundação, temos como
            objetivo oferecer aos nossos clientes veículos de alta qualidade, com o melhor atendimento e condições
            especiais de financiamento.
          </p>
          <img src={car1} alt="Carro à venda" className="about-image" />
          <p>
            Acreditamos que cada cliente é único, e por isso nos esforçamos para entender suas necessidades e
            oferecer a melhor opção de compra. Com uma equipe especializada, garantimos que você saia da nossa loja
            com um veículo que atenda às suas expectativas e desejos.
          </p>
        </div>

        <div className="about-values">
          <h2>Nossos Valores:</h2>
          <ul>
            <li>
              <strong>Qualidade:</strong> Trabalhamos com carros inspecionados e revisados, garantindo que cada
              veículo esteja em perfeitas condições.
            </li>
            <li>
              <strong>Confiança:</strong> Construímos uma relação de transparência com nossos clientes, com o
              compromisso de oferecer sempre as melhores opções.
            </li>
            <li>
              <strong>Atendimento Personalizado:</strong> Nossa equipe está sempre pronta para ajudar, oferecendo
              consultoria especializada para ajudar na escolha do carro ideal.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-why">
        <h2>Por que escolher MVP Veiculos?</h2>
        <div className="about-why-box">
          <div className="about-box">
            <img src={qualityIcon} alt="Ícone de Qualidade" className="about-box-image" />
            <h3>Variedade de Modelos</h3>
            <p>Temos uma ampla gama de carros para atender a todos os gostos e necessidades.</p>
          </div>
          <div className="about-box">
            <img src={qualityIcon} alt="Ícone de Financiamento" className="about-box-image" />
            <h3>Financiamento Facilitado</h3>
            <p>Oferecemos opções de financiamento com as melhores condições para você realizar seu sonho.</p>
          </div>
          <div className="about-box">
            <img src={qualityIcon} alt="Ícone de Atendimento" className="about-box-image" />
            <h3>Atendimento de Excelência</h3>
            <p>Uma equipe qualificada e pronta para oferecer a melhor experiência na compra do seu carro.</p>
          </div>
        </div>
      </section>
    </div>
        <Footer />
        </>
      );
}
    export default Sobre