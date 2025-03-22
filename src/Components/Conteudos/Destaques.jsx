import React from "react";
import "./destaques.css";

const Carros = () => {
  const carros = [
    { id: 1, nome: "BMW Esportivo", imagem: "/src/assets/bmw01.jpg", descricao: "Velocidade e potência incomparáveis." },
    { id: 2, nome: "BMW Luxo", imagem: "/src/assets/bmw02.jpg", descricao: "Conforto e sofisticação." },
    { id: 3, nome: "Lamborghini", imagem: "/src/assets/lambo-huracan-stj.jpg", descricao: "Design agressivo e velocidade." },
    { id: 4, nome: "Mustang Clássico", imagem: "/src/assets/mustang-red.png", descricao: "Estilo clássico e potência." },
  
  ];

  return (
    <div className="carros-container">
      <h1 className="titulo">Destaques de Carros</h1>
      <div className="carros-grid">
        {carros.map((carro) => (
          <div key={carro.id} className="carro-card">
            <img src={carro.imagem} alt={carro.nome} className="carro-imagem" />
            <h2>{carro.nome}</h2>
            <p>{carro.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carros;
