import PropTypes from "prop-types";
import useLanguage from "../context/useLanguage";
import "../styles/Bio.css";

const Bio = () => {
  const { language } = useLanguage();
  const cvUrl = language === "en" ? "/CVen.pdf" : "/CVes.pdf";

  return (
    <div className="bio-container">
      <h2 className="bio-title">
        {language === "en" ? "Who Am I?" : "¿Quién soy?"}
      </h2>

      <div className="bio-content">
        <section className="bio-section">
          <h3>{language === "en" ? "About Me" : "Sobre Mí"}</h3>
          <p>
            {language === "en" ? (
              <>
                My name is{" "}
                <span className="bio-keyword">Cristina Silvestre</span>, and I
                am a junior web developer who has just completed the{" "}
                <span className="bio-keyword">
                  Web Application Development - Higher Level Education Cycle
                </span>
                . Throughout my studies, I have acquired essential knowledge of
                web development fundamentals, and I always strive to keep
                learning and improving my skills.
              </>
            ) : (
              <>
                Mi nombre es{" "}
                <span className="bio-keyword">Cristina Silvestre</span>, soy una
                desarrolladora web junior que acaba de finalizar el{" "}
                <span className="bio-keyword">
                  Ciclo Superior de Desarrollo de Aplicaciones Web
                </span>
                . A lo largo de mi formación, he adquirido conocimientos
                esenciales sobre los fundamentos del desarrollo web y siempre
                busco maneras de seguir aprendiendo, y así, poder mejorar mis
                habilidades.
              </>
            )}
          </p>
        </section>

        <section className="bio-section">
          <h3>{language === "en" ? "My Skills" : "Mis Habilidades"}</h3>
          <ul>
            {language === "en" ? (
              <>
                <li>
                  <span className="bio-keyword">HTML5, CSS3</span>, and{" "}
                  <span className="bio-keyword">PHP</span>: Experience in
                  creating and managing dynamic content for websites.
                </li>
                <li>
                  <span className="bio-keyword">Java</span> and{" "}
                  <span className="bio-keyword">JavaScript</span>: Applied
                  programming logic and data manipulation in projects.
                </li>
                <li>
                  <span className="bio-keyword">SQL</span> and{" "}
                  <span className="bio-keyword">MySQL</span>: Skills to perform
                  queries and manage data, preparing for more complex
                  environments.
                </li>
                <li>
                  Currently learning{" "}
                  <span className="bio-keyword">Spring Boot</span> and{" "}
                  <span className="bio-keyword">React</span> for backend
                  development and modern user interfaces.
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="bio-keyword">HTML5, CSS3</span> y{" "}
                  <span className="bio-keyword">PHP</span>: Experiencia en crear
                  y gestionar contenido dinámico para sitios web.
                </li>
                <li>
                  <span className="bio-keyword">Java</span> y{" "}
                  <span className="bio-keyword">JavaScript</span>: Aplicación de
                  lógica de programación y manipulación de datos en proyectos.
                </li>
                <li>
                  <span className="bio-keyword">SQL</span> y{" "}
                  <span className="bio-keyword">MySQL</span>: Habilidades para
                  realizar consultas y gestionar datos, preparándome para
                  entornos más complejos.
                </li>
                <li>
                  Actualmente aprendiendo{" "}
                  <span className="bio-keyword">Spring Boot</span> y{" "}
                  <span className="bio-keyword">React</span> para desarrollo
                  backend e interfaces de usuario modernas.
                </li>
              </>
            )}
          </ul>
        </section>

        <section className="bio-section">
          <h3>{language === "en" ? "My Goals" : "Mis Objetivos"}</h3>
          <p>
            {language === "en" ? (
              <>
                I am looking for an opportunity to{" "}
                <span className="bio-keyword"> apply my knowledge</span>, grow
                as a developer, and contribute meaningfully to a team while
                working in an innovative and collaborative environment.
              </>
            ) : (
              <>
                Estoy buscando una oportunidad para{" "}
                <span className="bio-keyword">aplicar mis conocimientos</span>,
                crecer como desarrolladora y aportar de manera significativa a
                un equipo mientras trabajo en un entorno innovador y
                colaborativo.
              </>
            )}
          </p>
        </section>

        <section className="bio-section">
          <h3>{language === "en" ? "My Interests" : "Mis Intereses"}</h3>
          <p>
            {language === "en" ? (
              <>
                When I&#39;m not programming, I clear my mind by exercising,
                which is very important to me. Although what I enjoy most is
                spending time with my <span className="hover-cats">cats</span>{" "}
                giving them the love they deserve &#40;with some videos about
                new tech trends in the background&#41;.
              </>
            ) : (
              <>
                Cuando no estoy programando, despejo la mente haciendo deporte,
                algo que es muy importante para mí. Aunque lo que más disfruto
                es pasar tiempo con mis{" "}
                <span className="hover-cats">gatos</span> dándoles el cariño que
                merecen &#40;y con algún vídeo sobre nuevas tendencias tech de
                fondo&#41;.
              </>
            )}
          </p>
        </section>

        <a href={cvUrl} download className="download-cv-btn">
          {language === "en" ? "Download My CV" : "Descargar mi CV"}
        </a>
      </div>
    </div>
  );
};

Bio.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Bio;
