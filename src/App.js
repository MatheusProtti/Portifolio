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
              Hi, i´m Matheus Protti. A passionate technology developer <br />{" "}
              based in Porto Alegre, Brazil. 📍
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
          <h2>Tech Stack</h2>
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
            <h4>About me</h4>
            <h3>
              A dedicated Front-end Developer <br /> based in Porto Alegre,
              Brasil 📍
            </h3>
            <p>
              My name is Matheus Protti, I live in Porto Alegre (Rio Grande do
              Sul) and I am passionate about technology, my first contact with
              programming was in 2018, when I was still in high school, even
              though I liked studying programming, I just started giving due
              focus in 2021, when i leaves the Brazilian Army (barracks). Today
              I'm studying the 5th semester of the Computer Science faculty and
              I study through courses and alone at home.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="contentProjects">
          <div className="portifolioProjects">
            <p>Portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects">
              <Projects
                titulo="CAR RENTAL 🚗"
                paragrafo="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                site="https://github.com/MatheusProtti"
                tecnologias={["REACT", "HTML", "CSS"]}
                code="#"
              />
              <Projects
                titulo="CAR RENTAL 🚗"
                paragrafo="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                site="https://github.com/MatheusProtti"
                tecnologias={["HTML", "CSS", "JS"]}
                code="#"
                isInverted
              />
              <Projects
                titulo="CAR RENTAL 🚗"
                paragrafo="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                site="https://github.com/MatheusProtti"
                tecnologias={["HTML", "CSS"]}
                code="#"
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
