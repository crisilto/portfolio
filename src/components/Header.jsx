import PropTypes from 'prop-types';
import { useState } from 'react';
import useLanguage from '../context/useLanguage';
import '../styles/Header.css';

const Header = ({ onTabClick, onAddTab, currentTab }) => {
  const {language} = useLanguage();

  const [isWorkExpanded, setIsWorkExpanded] = useState(false);

  const handleWorkToggle = () => {
    setIsWorkExpanded(!isWorkExpanded);
  };

  return (
    <nav className="sidebar">
      <ul>
        <li
          className={currentTab === '_home' ? 'active' : ''}
          onClick={() => {
            onAddTab({ id: '_home', label: language === 'en' ? '_home' : '_inicio' });
            onTabClick('_home');
          }}
        >
          {language === 'en' ? '_home' : '_inicio'}
        </li>
        <li
          className={`expandable ${isWorkExpanded ? 'expanded' : ''} ${['_bio', '_projects'].includes(currentTab) ? 'active' : ''}`}
          onClick={handleWorkToggle}
        >
          {language === 'en' ? '_work' : '_trabajo'}
        </li>
        {isWorkExpanded && (
          <ul>
            <li
              className={`child ${currentTab === '_bio' ? 'active' : ''}`}
              onClick={() => {
                onAddTab({ id: '_bio', label: language === 'en' ? '_bio' : '_biografía' });
                onTabClick('_bio');
              }}
            >
              {language === 'en' ? '_bio' : '_biografía'}
            </li>
            <li
              className={`child ${currentTab === '_projects' ? 'active' : ''}`}
              onClick={() => {
                onAddTab({ id: '_projects', label: language === 'en' ? '_projects' : '_proyectos' });
                onTabClick('_projects');
              }}
            >
              {language === 'en' ? '_projects' : '_proyectos'}
            </li>
          </ul>
        )}
        <li
          className={currentTab === '_contact' ? 'active' : ''}
          onClick={() => {
            onAddTab({ id: '_contact', label: language === 'en' ? '_contact' : '_contacto' });
            onTabClick('_contact');
          }}
        >
          {language === 'en' ? '_contact' : '_contacto'}
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  onAddTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default Header;
