import "./contato.css";
import Icones from "../Icones/index";

function Contato() {
  return (
    <section id="contact" className="contact">
      <div className="containerContact">
        {/* <div className="contactContent"> */}
        <div className="contactTitle">
          <p>Contato</p>
          <h3>Não perca tempo! me chame! 👇</h3>
        </div>
        <div className="contactLocation">
          <div className="contactBox">
            <Icones icone="mapa.png" descricao="icone mapa" />
            <div className="contactInfo">
              <h3>Localização</h3>
              <p>Porto Alegre, Brasil</p>
            </div>
          </div>
          <div className="contactBox">
            <Icones icone="email.png" descricao="icone email" />
            <div className="contactInfo">
              <h3>Email</h3>
              <p>prottimatheus@gmail.com</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Contato;
