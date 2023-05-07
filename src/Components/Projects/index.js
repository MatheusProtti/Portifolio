import "./projects.css";

function Projects({
  titulo,
  paragrafo,
  tecnologias = [],
  site,
  code,
  isInverted,
}) {
  return (
    <div
      className={isInverted ? "projectContainer inverted" : "projectContainer"}
    >
      <div className="projectImg">
        <a target="_blank" href={site} rel="noreferrer">
          <img src="EU.jpg" alt="website" />
        </a>
      </div>
      <div className="projectInfo">
        <h3>{titulo}</h3>
        <p>{paragrafo}</p>
        <div className="stacks">
          {Array.isArray(tecnologias) &&
            tecnologias.map((tecnologia, index) => (
              <p key={index}>{tecnologia}</p>
            ))}
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={code}>
            Code
            <img
              className="githubImgIcon"
              src="github.png"
              alt="link code github"
            />
          </a>
          <a target="_blank" href={site} rel="noreferrer">
            Live Demo
            <img
              className="arrowShareIcon"
              src="sharearrow.png"
              alt="site rodando"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
