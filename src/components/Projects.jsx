import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaExternalLinkAlt, FaGithub, FaHtml5, FaJava, FaJsSquare, FaPhp, FaReact } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { RiH2 } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import useLanguage from '../context/useLanguage';

import '../styles/Projects.css';
import FilterBar from './FilterBar';

const Projects = () => {
  const { language } = useLanguage();

  const allTechnologies = useMemo(() => [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'React',
    'SpringBoot',
    'H2',
    'SASS',
    'Java',
    'Bootstrap',
  ], []);

  const projectsData = useMemo(() => [
    {
      id: 1,
      nameEn: 'Dev365',
      nameEs: 'Dev365',
      descriptionEn: '2nd DAW Final project - A complete website with casino games.',
      descriptionEs: 'Proyecto final del 2º DAW - Un sitio web completo con juegos de casino.',
      githubUrl: 'https://github.com/crisilto/dev365',
      demoUrl: '',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      id: 2,
      nameEn: 'FakeBook',
      nameEs: 'FakeBook',
      descriptionEn: 'A Facebook-inspired social media clone demonstrating full-stack capabilities.',
      descriptionEs: 'Un clon de Facebook que demuestra capacidades de desarrollo full-stack.',
      githubUrl: '',
      demoUrl: '',
      technologies: ['React', 'SpringBoot', 'H2', 'SASS']
    },
    {
      id: 3,
      nameEn: 'GymrApp',
      nameEs: 'GymrApp',
      descriptionEn: 'Track your workouts and progress. Includes user data visualization.',
      descriptionEs: 'Registra tus entrenamientos y progresos. Incluye visualización de datos del usuario.',
      githubUrl: '',
      demoUrl: '',
      technologies: ['React', 'SpringBoot', 'H2', 'SASS']
    },
    {
      id: 4,
      nameEn: 'TaskManager API',
      nameEs: 'API Gestor de Tareas',
      descriptionEn: 'A REST API for managing tasks and projects, built with Java and Spring Boot.',
      descriptionEs: 'Una API REST para gestionar tareas y proyectos, desarrollada con Java y Spring Boot.',
      githubUrl: '',
      demoUrl: '',
      technologies: ['Java', 'SpringBoot']
    },
    {
      id: 5,
      nameEn: 'SimpleBlog',
      nameEs: 'BlogSimple',
      descriptionEn: 'A basic blog platform featuring CRUD operations for posts.',
      descriptionEs: 'Una plataforma de blog básica con operaciones CRUD para publicaciones.',
      githubUrl: '',
      demoUrl: '',
      technologies: ['PHP']
    },
    {
      id: 6,
      nameEn: 'Paintribution',
      nameEs: 'Paintribution',
      descriptionEn: 'Github contributions panel clone. Click to relieve stress!',
      descriptionEs: 'Clon del panel de contribuciones de GitHub. ¡Haz clic para aliviar el estrés!',
      githubUrl: 'https://github.com/crisilto/paintribution',
      demoUrl: 'https://paintribution.vercel.app',
      technologies: ['JavaScript', 'React', 'CSS']
    },
    {
      id: 7,
      nameEn: 'Vidly',
      nameEs: 'Vidly',
      descriptionEn: 'A simple but functional movies library',
      descriptionEs: 'Una biblioteca de películas simple pero funcional.',
      githubUrl: 'https://github.com/crisilto/movies-with-react',
      demoUrl: 'https://movies-with-react-phi.vercel.app/movies',
      technologies: ['JavaScript', 'React', 'Bootstrap']
    },
    {
      id: 8,
      nameEn: 'Actuality & Goal',
      nameEs: 'Actualidad & Gol',
      descriptionEn: 'Layout made with vanilla html and css of a digital sports newspaper.',
      descriptionEs: 'Maquetación en HTML y CSS vanilla de un periódico digital deportivo.',
      githubUrl: 'https://github.com/crisilto/actualidad-y-gol',
      demoUrl: 'https://actualidad-y-gol.vercel.app',
      technologies: ['HTML', 'CSS']
    },
  ], []);

  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    const updatedProjects = projectsData.map((project) => ({
      ...project,
      name: language === 'en' ? project.nameEn : project.nameEs,
      description: language === 'en' ? project.descriptionEn : project.descriptionEs,
    }));

    if (selectedTechnologies.length > 0) {
      const filtered = updatedProjects.filter((project) =>
        selectedTechnologies.some((tech) => project.technologies.includes(tech))
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(updatedProjects);
    }
  }, [language, projectsData, selectedTechnologies]);

  const handleFilterChange = (selected) => {
    setSelectedTechnologies(selected);

    if (selected.length === 0) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        selected.some((tech) => project.technologies.includes(tech))
      );
      setFilteredProjects(filtered);
    }
  };

  const techIconsMapping = {
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJsSquare,
    PHP: FaPhp,
    MySQL: GrMysql,
    React: FaReact,
    SpringBoot: BiLogoSpringBoot,
    H2: RiH2,
    SASS: SiSass,
    Java: FaJava,
    Bootstrap: FaBootstrap,
  };

  const handleIconClick = (tech) => {
    if (selectedTechnologies.includes(tech)) {
      handleFilterChange(selectedTechnologies.filter((t) => t !== tech));
    } else {
      handleFilterChange([...selectedTechnologies, tech]);
    }
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">{language === 'en' ? 'My Projects' : 'Mis Proyectos'}</h2>

      <FilterBar
        technologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onFilterChange={handleFilterChange}
      />

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-link ${!project.githubUrl ? 'disabled' : ''}`}
                onClick={(e) => !project.githubUrl && e.preventDefault()}
              >
                <FaGithub className="project-icon" /> {language === 'en' ? 'GitHub' : 'GitHub'}
              </a>
              <a
                href={project.demoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-link ${!project.demoUrl ? 'disabled' : ''}`}
                onClick={(e) => !project.demoUrl && e.preventDefault()}
              >
                <FaExternalLinkAlt className="project-icon" /> {language === 'en' ? 'Live Demo' : 'Demo en Vivo'}
              </a>
            </div>

            <div className="technologies-used">
              {project.technologies.map((tech) => {
                const TechIcon = techIconsMapping[tech];
                return (
                  <span key={tech} className="tech-tag" onClick={() => handleIconClick(tech)}>
                    <TechIcon className="tech-icon" />
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  language: PropTypes.string,
};

export default Projects;
