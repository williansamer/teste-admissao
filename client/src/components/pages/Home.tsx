import React from "react";
import "../styles/pages/home.css";

const Home: React.FC = () => {
  return (
    <section className="home-container-section">
      <img
        src="../../logo/logo.png"
        alt="imagem"
      />
      <div className="section-about">
        <div className="about-subtitle">Our Story</div>
        <div className="about-title">Who are we and how did we get here?</div>
        <div className="about-description">
          A <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </section>
  );
};

export default Home;
