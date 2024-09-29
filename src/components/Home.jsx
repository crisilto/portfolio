import PropTypes from 'prop-types';
import '../styles/Home.css';

const Home = ({language}) => {
  return (
    <div className="home-container">
      <div className="contact-photo">
        <img src="/cv.jpg" alt="Cristina Silvestre" className="avatar" />
      </div>
      <h1 className="home-title">
      {language === 'en' ? 'Hi there' : 'Hola'} <span role="img" aria-label="wave">👋</span> {language === 'en' ? "I'm" : 'Soy'}
      </h1>
      <h2 className="home-name">{'[Cristina Silvestre]'}</h2>
      <h3 className="home-role">{language === 'en' ? 'Web Developer' : 'Desarrolladora Web'}</h3>
      <p className="home-description">
        {language === 'en' ? "I recently graduated in DAW" : "Recién graduada en DAW"}
        <br />
        {language === 'en'? "Consistenly learning, I'm looking for my opportunity to grow" : "Constantemente aprendiendo, buscando mi oportunidad para crecer"}
      </p>
      <p className="home-links">
        {language === "en" ? "My GitHub profile" : "Mi perfil de GitHub"}
        <br />
        const githubUrl = &quot;<a href="https://github.com/crisilto" target="_blank" rel="noopener noreferrer">https://github.com/crisilto</a>&quot;
      </p>
    </div>
  );
};

Home.propTypes = {
  language: PropTypes.string.isRequired,
}

export default Home;
