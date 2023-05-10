import Logo from "../Logo/index.js";
import "./header.css";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive((current) => !current);
  };

  return (
    <div id="header" className="header">
      <Logo />
      <div>
        <ul id="navBar" className={isActive ? "ativo" : ""}>
          <li>
            <a onClick={handleClick} href="#home">
              Inicio
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="#projects">
              Projetos
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="#contact">
              Contato
            </a>
          </li>
        </ul>
        <div id="menu" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
