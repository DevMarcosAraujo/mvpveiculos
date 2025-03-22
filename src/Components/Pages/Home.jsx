import Destaques from "../Conteudos/Destaques";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SlideShow from "../Slide/Slide";
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <Header />
            <SlideShow />
            < Destaques />
            <Link to="/carros" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
              Ver Destaques de Carros
            </Link>  
            <Footer />
        </>
    );
}

export default Home;
