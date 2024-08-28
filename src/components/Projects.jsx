import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal website to showcase my skills and projects.',
      githubUrl: 'https://github.com/crisilto/portfolio',
      demoUrl: 'https://crisilto.github.io/portfolio',
    },
    {
      name: 'E-commerce Store',
      description: 'An online store built with React and Node.js.',
      githubUrl: 'https://github.com/crisilto/ecommerce',
      demoUrl: 'https://ecommerce-example.com',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="project-icon" /> GitHub
              </a>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt className="project-icon" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
