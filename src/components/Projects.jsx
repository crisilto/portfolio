import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = ({ language }) => {
  const projects = [
    {
      id: 1,
      name: language === 'en' ? 'Dev365' : 'Dev365',
      description: language === 'en'
        ? '2nd DAW Final project - A complete website with casino games.'
        : 'Proyecto final del 2º DAW - Un sitio web completo con juegos de casino.',
      githubUrl: 'https://github.com/crisilto/dev365',
      demoUrl: '',
    },
    {
      id: 2,
      name: language === 'en' ? 'FakeBook' : 'FakeBook',
      description: language === 'en'
        ? 'A Facebook-inspired social media clone demonstrating full-stack capabilities.'
        : 'Un clon de Facebook que demuestra capacidades de desarrollo full-stack.',
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 3,
      name: language === 'en' ? 'GymrApp' : 'GymrApp',
      description: language === 'en'
        ? 'A gym app for tracking workouts and progress, featuring user data visualization.'
        : 'Aplicación de gimnasio para registrar entrenamientos y progreso, con visualización de datos del usuario.',
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 4,
      name: language === 'en' ? 'TaskManager API' : 'API Gestor de Tareas',
      description: language === 'en'
        ? 'A REST API for managing tasks and projects, built with Java and Spring Boot.'
        : 'Una API REST para gestionar tareas y proyectos, desarrollada con Java y Spring Boot.',
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 5,
      name: language === 'en' ? 'SimpleBlog' : 'BlogSimple',
      description: language === 'en'
        ? 'A basic blog platform built with PHP, featuring CRUD operations for posts.'
        : 'Una plataforma de blog básica creada con PHP, con operaciones CRUD para publicaciones.',
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 6,
      name: language === 'en' ? 'Paintribution' : 'Paintribution',
      description: language === 'en'
        ? 'Github contributions panel clone. Click to relieve stress!'
        : 'Clon del panel de contribuciones de GitHub. ¡Haz clic para aliviar el estrés!',
      githubUrl: 'https://github.com/crisilto/paintribution',
      demoUrl: 'https://paintribution.vercel.app',
    },
    {
      id: 7,
      name: language === 'en' ? 'Vidly' : 'Vidly',
      description: language === 'en'
        ? 'A simple but functional movies library.'
        : 'Una biblioteca de películas simple pero funcional.',
      githubUrl: 'https://github.com/crisilto/movies-with-react',
      demoUrl: 'https://movies-with-react-phi.vercel.app/movies',
    },
    {
      id: 8,
      name: language === 'en' ? 'Actuality & Goal' : 'Actualidad & Gol',
      description: language === 'en'
        ? 'Layout made with vanilla html and css of a digital sports newspaper.'
        : 'Maquetación en HTML y CSS vanilla de un periódico digital deportivo.',
      githubUrl: 'https://github.com/crisilto/actualidad-y-gol',
      demoUrl: 'https://actualidad-y-gol.vercel.app',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">{language === 'en' ? 'My Projects' : 'Mis Proyectos'}</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-link ${!project.githubUrl ? 'disabled' : ''}`}
                onClick={e => !project.githubUrl && e.preventDefault()}
              >
                <FaGithub className="project-icon" /> {language === 'en' ? 'GitHub' : 'GitHub'}
              </a>
              <a
                href={project.demoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-link ${!project.demoUrl ? 'disabled' : ''}`}
                onClick={e => !project.demoUrl && e.preventDefault()}
              >
                <FaExternalLinkAlt className="project-icon" /> {language === 'en' ? 'Live Demo' : 'Demo en Vivo'}
              </a>
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
