import "./footer.css";
import Icones from "../Icones/index";

function Footer() {
  return (
    <div className="footerContainer">
      <h3>Copyright © 2023. Todos os direitos reservados</h3>
      <div className="footerLinks">
        <Icones
          icone="linkedin.png"
          descricao="icone linkedin"
          link="https://www.linkedin.com/in/matheus-protti/"
        />
        <Icones
          icone="github.png"
          descricao="icone github"
          link="https://github.com/MatheusProtti"
        />
      </div>
    </div>
  );
}

export default Footer;
