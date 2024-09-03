import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = ({ language }) => {
  const projects = [
    {
      name: language === 'en' ? 'Portfolio' : 'Portafolio',
      description: language === 'en'
        ? 'A personal website to showcase my skills and projects.'
        : 'Un sitio web personal para mostrar mis habilidades y proyectos.',
      githubUrl: 'https://github.com/crisilto/portfolio',
      demoUrl: 'https://crisilto.github.io/portfolio',
    },
    {
      name: language === 'en' ? 'Dev365' : 'Dev365',
      description: language === 'en'
        ? '2nd DAW Final project - A complete website with casino games.'
        : 'Proyecto final del 2º DAW - Un sitio web completo con juegos de casino.',
      githubUrl: 'https://github.com/crisilto/dev365',
      demoUrl: '',
    },
    {
      name: language === 'en' ? 'Paintribution' : 'Paintribution',
      description: language === 'en'
        ? 'Github contributions panel clone. Click to relieve stress!'
        : 'Clon del panel de contribuciones de GitHub. ¡Haz clic para aliviar el estrés!',
      githubUrl: 'https://github.com/crisilto/paintribution',
      demoUrl: 'https://paintribution.vercel.app',
    },
    {
      name: language === 'en' ? 'Vidly' : 'Vidly',
      description: language === 'en'
        ? 'A simple but functional video library.'
        : 'Una biblioteca de videos simple pero funcional.',
      githubUrl: 'https://github.com/crisilto/movies-with-react',
      demoUrl: 'https://movies-with-react-phi.vercel.app/movies',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">{language === 'en' ? 'My Projects' : 'Mis Proyectos'}</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="project-icon" /> {language === 'en' ? 'GitHub' : 'GitHub'}
              </a>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt className="project-icon" /> {language === 'en' ? 'Live Demo' : 'Demo en Vivo'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Projects;
