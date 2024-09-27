import PropTypes from "prop-types";
import "../styles/Bio.css";

const Bio = ({ language }) => {
  return (
    <div className="bio-container">
      <h2 className="bio-title">
        {language === "en" ? "About Me" : "Sobre Mí"}
      </h2>

      <div className="bio-content">
        <section className="bio-section">
          <h3>{language === "en" ? "My Story" : "Mi Historia"}</h3>
          <p>
            {language === "en"
              ? "I'm a junior web developer who has just completed her advanced studies in Web Application Development. I strive to continue my learning every day by diving into new technologies and applying them in open-source communities."
              : "Soy una desarrolladora web junior que acaba de completar sus estudios avanzados en Desarrollo de Aplicaciones Web. Me esfuerzo por seguir aprendiendo cada día al sumergirme en nuevas tecnologías y aplicarlas en comunidades de código abierto."}
          </p>
        </section>

        <section className="bio-section">
          <h3>{language === "en" ? "Interests" : "Intereses"}</h3>
          <p>
            {language === "en"
              ? "When I'm not coding, I unwind by exercising and spending time with my cats. I love exploring new tech trends."
              : "Cuando no estoy programando, me relajo haciendo ejercicio y pasando tiempo con mis gatos. Me encanta explorar nuevas tendencias tecnológicas."}
          </p>
        </section>
        <a
          href={
            language === "en" ? "src/assets/CVen.pdf" : "src/assets/CVes.pdf"
          }
          download
          className="download-cv-btn"
        >
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
