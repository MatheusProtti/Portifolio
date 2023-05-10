import "./App.css";
import Contato from "./Components/Contato";
import Hello from "./Components/Hello";
import Icones from "./Components/Icones";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="principal">
      <section id="home">
        <div className="infoMe">
          <div className="titulo">
            <h1>
              Front-End Web
              <br /> Developer <Hello />
            </h1>
            <p>
              Olá, sou Matheus Protti. Um desenvolvedor apaixonado por
              tecnologia <br /> com sede em Porto Alegre, Brasil. 📍
            </p>
            <div className="social">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/matheus-protti/"
              >
                <img src="linkedin.png" alt="linkedin" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MatheusProtti"
              >
                <img src="github.png" alt="github" />
              </a>
            </div>
          </div>
          <img className="fotoEu" src="EU.jpg" alt="Foto minha" />
        </div>
        <div className="tecnologias">
          <h2>Tecnologias</h2>
          <ul className="listaTecnologias">
            <Icones icone="html.png" descricao="icone html" />
            <Icones icone="css.png" descricao="icone css" />
            <Icones icone="javascript.png" descricao="icone javascript" />
            <Icones icone="react.png" descricao="icone react" />
          </ul>
        </div>
      </section>

      <section id="about" className="about">
        <div className="contentAbout">
          <img src="trabalhodev.jpg" alt="foto" />
          <div className="aboutMe">
            <h4>Sobre mim</h4>
            <h3>
              Um desenvolvedor front-end <br /> dedicado com sede em Porto
              Alegre, Brasil 📍
            </h3>
            <p>
              Meu nome é Matheus Protti, eu moro em Porto Alegre (Rio Grande do
              Sul) e sou apaixonado por tecnologia, meu primeiro contato com
              programação foi em 2018, quando ainda estava no ensino médio,
              mesmo gostando de estudar programação, só começei a dar o devido
              foco em 2021, quando sai do Exército Brasileiro(quartel). Hoje
              curso o 5° semestre da faculdade de Ciência da Computação e estudo
              através de cursos e sozinho em casa.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="contentProjects">
          <div className="portifolioProjects">
            <p>Portifolio</p>
            <h3>Cada projeto é uma peça única de desenvolvimento 🧩</h3>
            <div className="projects">
              <Projects
                titulo="Site UNIPEÇAS"
                paragrafo="O site da Unipecas é uma vitrine online para a empresa que fabrica e fornece peças para diversos segmentos industriais. Com um design limpo e organizado, o site apresenta uma navegação intuitiva que permite aos visitantes encontrar facilmente informações sobre os produtos, serviços, história e contatos da empresa."
                site="https://www.unipecas.ind.br/"
                tecnologias={["HTML", "CSS", "REACT.JS", "NEXT.JS"]}
                code="https://github.com/MatheusProtti/unipecas"
                imagem="unipecas.jpg"
              />
              <Projects
                titulo="EM BREVE"
                paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non orci viverra, euismod mauris a, fermentum augue. Cras eget ultricies felis. Aliquam auctor commodo felis vel faucibus."
                site="https://github.com/MatheusProtti"
                tecnologias={["HTML", "HTML", "HTML"]}
                code="#"
                imagem="em_breve.png"
                isInverted
              />
              <Projects
                titulo="EM BREVE"
                paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non orci viverra, euismod mauris a, fermentum augue. Cras eget ultricies felis. Aliquam auctor commodo felis vel faucibus."
                site="https://github.com/MatheusProtti"
                tecnologias={["HTML", "HTML"]}
                code="#"
                imagem="em_breve.png"
              />
            </div>
          </div>
        </div>
      </section>

      <Contato />
      {/* <section id="contact" className="contact">
        <div className="containerContact">

            <div className="contactTitle">
              <p>Contact</p>
              <h3>Don't be shy! Call me! 👇</h3>
            </div>
            <div className="contactLocation">
              <div className="contactBox">
                <Icones 
                  icone="mapa.png"
                  descricao="icone mapa"
                />
                <div className="contactInfo">
                  <h3>Location</h3>
                  <p>Porto Alegre, Brasil</p>
                </div>
              </div>
              <div className="contactBox">
                <Icones 
                  icone="email.png"
                  descricao="icone email"
                />
                <div className="contactInfo">
                  <h3>Email</h3>
                  <p>prottimatheus@gmail.com</p>
                </div>
              </div>
            </div>

        </div>
      </section> */}
    </div>
  );
}

export default App;
