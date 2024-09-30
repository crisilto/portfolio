import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ technologies, onFilterChange }) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const handleCheckboxChange = (tech) => {
        let updatedTechnologies;
        if (selectedTechnologies.includes(tech)) {
            updatedTechnologies = selectedTechnologies.filter((t) => t !== tech);
        } else {
            updatedTechnologies = [...selectedTechnologies, tech];
        }
        setSelectedTechnologies(updatedTechnologies);
        onFilterChange(updatedTechnologies);
    };

    return (
        <div className="filter-bar">
            <div className="checkbox-list">
                {technologies.map((tech) => (
                    <label key={tech} className="tech-checkbox-label">
                        <input
                            type="checkbox"
                            checked={selectedTechnologies.includes(tech)}
                            onChange={() => handleCheckboxChange(tech)}
                            className="tech-checkbox"
                        />
                        <span className="custom-checkbox"></span> 
                        {tech}
                    </label>
                ))}
            </div>
        </div>
    );
};

FilterBar.propTypes = {
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default FilterBar;
