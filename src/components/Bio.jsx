import PropTypes from 'prop-types';
import '../styles/Bio.css';

const Bio = ({ language }) => {
  return (
    <div className="bio-container">
      <h2 className="bio-title">{language === 'en' ? 'About Me' : 'Sobre Mí'}</h2>
      <p className="bio-text">
        {language === 'en' 
          ? "I'm a junior web developer who has just completed her advanced studies in Web Application Development. I strive to continue my learning every day by diving into new technologies and applying them in open-source communities."
          : "Soy una desarrolladora web primeriza que acaba de terminar sus estudios superiores en Desarrollo de Aplicaciones Web. Trato de continuar mi formación diariamente aprendiendo nuevas tecnologías y poniéndolas en práctica en comunidades de código abierto."}
      </p>
      <p className="bio-text">
        {language === 'en' 
          ? "When I'm not coding, I unwind by exercising and spending time with my cats. However, whenever I get a moment, you'll find me watching videos about programming, keeping up with the latest trends in the tech world."
          : "Cuando no estoy programando, desconecto haciendo ejercicio y pasando tiempo con mis gatos. Aunque siempre que tengo un rato, estaré viendo videos relacionados con la programación, manteniéndome al día con las últimas tendencias en el mundo tech."}
      </p>
      <p className="bio-text">
        {language === 'en' 
          ? "Feel free to reach out to me on LinkedIn or explore some of my early projects on GitHub :)"
          : "No dudes en contactar conmigo por Linkedin o explorar algunos de mis primeros proyectos en GitHub :)"}
      </p>
    </div>
  );
};

Bio.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Bio;
