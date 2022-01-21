import React from "react";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <section className="home-container-section">
      <img
        src="https://cdn.frentecorretora.com.br/2020/01/15191001/about_frente_mobile.png"
        alt="imagem"
      />
      <div className="section-about">
        <div className="about-subtitle">Our Story</div>
        <div className="about-title">Who are we and how did we get here?</div>
        <div className="about-description">
          A <strong>Frente</strong> é uma <strong>Corretora de Câmbio Digital</strong>, que alia tecnologia à
          experiência de profissionais com carreira consolidada no mercado
          financeiro. Trabalhamos de maneira incansável todos os dias para
          proporcionar a você o que há de mais moderno, seguro e acessível
          para tornar a sua experiência de câmbio inigualável. Nosso maior
          propósito é crescer junto com os nossos clientes. Queremos ser o seu
          melhor parceiro, capaz de atender às suas demandas e superar todas
          as suas expectativas e desafios, em um mundo que se transforma cada
          vez mais rapidamente.
        </div>
      </div>
    </section>
  );
};

export default Home;
