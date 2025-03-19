
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import SlideShow from "../Slide/Slide";


function Home() {
    return (
        <>
        <Header />
      <SlideShow />
      <div>
        <h1>Bem-vindo à Home</h1>
        <p>Este é o conteúdo da página inicial.</p>
      </div>
      <Footer />
      </> 
    );
  }
  
  export default Home;