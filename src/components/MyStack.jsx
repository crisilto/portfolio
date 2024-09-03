import PropTypes from 'prop-types';
import { FaCss3Alt, FaDatabase, FaGit, FaHtml5, FaJava, FaJs, FaPhp, FaReact } from 'react-icons/fa';
import '../styles/MyStack.css';

const MyStack = ({language}) => {
  const techStack = [
    { name: 'HTML5', icon: <FaHtml5 className="stack-icon" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="stack-icon" /> },
    { name: 'JavaScript', icon: <FaJs className="stack-icon" /> },
    { name: 'React', icon: <FaReact className="stack-icon" /> },
    { name: 'Java', icon: <FaJava className="stack-icon" /> },
    { name: 'PHP', icon: <FaPhp className="stack-icon" /> },
    { name: 'SQL', icon: <FaDatabase className="stack-icon" /> },
    { name: 'Git', icon: <FaGit className="stack-icon" /> },
  ];

  return (
    <div className="stack-container">
      <h2 className="stack-title">{language === "en" ? "My Tech Stack" : "Mis tecnologías"}</h2>
      <div className="stack-list">
        {techStack.map((tech) => (
          <div key={tech.name} className="stack-item">
            {tech.icon}
            <span className="stack-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

MyStack.propTypes = {
  language: PropTypes.string.isRequired,
};

export default MyStack;
