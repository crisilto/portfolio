import PropTypes from "prop-types";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { SiAstro, SiTypescript } from "react-icons/si";
import "../styles/MyStack.css";

const MyStack = ({ language }) => {
  const technologiesLearned = [
    { name: "HTML5", icon: <FaHtml5 className="stack-icon" /> },
    { name: "CSS3", icon: <FaCss3Alt className="stack-icon" /> },
    { name: "Java", icon: <FaJava className="stack-icon" /> },
    { name: "SQL", icon: <FaDatabase className="stack-icon" /> },
    { name: "JavaScript", icon: <FaJs className="stack-icon" /> },
    { name: "PHP", icon: <FaPhp className="stack-icon" /> },
    { name: "MySQL", icon: <FaDatabase className="stack-icon" /> },
    { name: "Git", icon: <FaGitAlt className="stack-icon" /> },
    { name: "GitHub", icon: <FaGithub className="stack-icon" /> },
  ];

  const technologiesLearning = [
    { name: "Spring Boot", icon: <FaJava /> },
    { name: "Docker", icon: <FaDatabase /> },
    { name: "React", icon: <FaReact className="stack-icon" /> },
  ];

  const technologiesInterested = [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Astro", icon: <SiAstro /> },
  ];

  return (
    <div className="my-stack-container">
      <h2 className="projects-title">
        {language === "en" ? "My Stack" : "Mi Stack"}
      </h2>

      <div className="section">
        <h2 className="section-title">
          {language === "en" ? "I have learned..." : "He aprendido..."}
        </h2>
        <div className="learned-column tech-category">
          {technologiesLearned.map((tech) => (
            <div key={tech.name} className="tech-item learned">
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">
          {language === "en"
            ? "I am currently learning..."
            : "Estoy aprendiendo..."}
        </h2>
        <div className="learning-column tech-category">
          {technologiesLearning.map((tech) => (
            <div key={tech.name} className="tech-item currently-learning">
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">
          {language === "en"
            ? "I am interested in learning..."
            : "Estoy interesada en aprender..."}
        </h2>
        <div className="interested-column tech-category">
          {technologiesInterested.map((tech) => (
            <div key={tech.name} className="tech-item interested">
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MyStack.propTypes = {
  language: PropTypes.string.isRequired,
};

export default MyStack;
