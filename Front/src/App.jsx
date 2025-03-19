
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

//biblioteca adicionadas para melhoras
import 'bootstrap/dist/css/bootstrap.min.css';
//pages //
import Home from './Components/Pages/Home'
import Sobre from './Components/Pages/Sobre'
import Veiculos from './Components/Pages/Veiculos'
import Contatos from './Components/Pages/Contatos'
import Login from './Components/Login/Login'


import ScrollToTop from './utils/ScrollTop'

function App() {
  return (
    <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={ <Home />}></Route>
      <Route path="Sobre" element={ <Sobre />}></Route>
      <Route path="Veiculos" element={ <Veiculos />}></Route>
      <Route path="Contatos" element={ <Contatos />}></Route>
      <Route path="Login" element={ <Login />}></Route>
    </Routes>
  </Router>
  )
}

export default App
