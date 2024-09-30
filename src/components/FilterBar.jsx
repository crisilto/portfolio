import PropTypes from 'prop-types';
import "../styles/FilterBar.css";

const FilterBar = ({ technologies, selectedTechnologies, onFilterChange, selectAll }) => {
    const handleCheckboxChange = (tech) => {
      const newSelectedTechnologies = selectedTechnologies.includes(tech)
        ? selectedTechnologies.filter((t) => t !== tech)
        : [...selectedTechnologies, tech];
      
      onFilterChange(newSelectedTechnologies);
    };
  
    return (
      <div className="checkbox-list">
        <label className="tech-checkbox-label">
          <input
            type="checkbox"
            className="tech-checkbox"
            checked={selectAll}
            onChange={() => onFilterChange([])} // Deselects all when checked
          />
          <span className="custom-checkbox"></span>
          All
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
  selectAll: PropTypes.bool.isRequired,
};

export default FilterBar;
