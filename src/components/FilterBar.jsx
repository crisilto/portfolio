import PropTypes from 'prop-types';
import useLanguage from '../context/useLanguage';
import "../styles/FilterBar.css";

const FilterBar = ({ technologies, selectedTechnologies, onFilterChange }) => {
  const { language } = useLanguage();

  const handleCheckboxChange = (tech) => {
    const newSelectedTechnologies = selectedTechnologies.includes(tech)
      ? selectedTechnologies.filter((t) => t !== tech)
      : [...selectedTechnologies, tech];

    onFilterChange(newSelectedTechnologies);
  };

  const handleSelectAllChange = () => {
    onFilterChange([]);
  };

  const isAllSelected = selectedTechnologies.length === 0;

  return (
    <div className="checkbox-list">
      <label className="tech-checkbox-label">
        <input
          type="checkbox"
          className="tech-checkbox"
          checked={isAllSelected}
          onChange={handleSelectAllChange}
        />
        <span className="custom-checkbox"></span>
        {language === "en" ? "All" : "Todos"}
      </label>

      {technologies.map((tech) => (
        <label key={tech} className="tech-checkbox-label">
          <input
            type="checkbox"
            className="tech-checkbox"
            checked={selectedTechnologies.includes(tech)}
            onChange={() => handleCheckboxChange(tech)}
          />
          <span className="custom-checkbox"></span>
          {tech}
        </label>
      ))}
    </div>
  );
};

FilterBar.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTechnologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterBar;