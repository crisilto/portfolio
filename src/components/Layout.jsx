import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaGithub, FaGlobe, FaLinkedin, FaPalette } from 'react-icons/fa';
import '../styles/Layout.css';

const Layout = ({ children, activeTabs, currentTab, onTabClick, onAddTab, onCloseTab, toggleColorPalette, toggleLanguage }) => {
  const [isWorkExpanded, setIsWorkExpanded] = useState(false);

  const handleWorkToggle = () => {
    setIsWorkExpanded(!isWorkExpanded);
  };

  return (
    <div className="layout-container">
      <div className="top-bar">
        <span className="username">Crisilto</span>
        <div className="tabs-header">
          {activeTabs.map((tab) => (
            <div key={tab.id} className={`tab ${tab.id === currentTab ? 'active' : ''}`}>
              <span onClick={() => onTabClick(tab.id)}>{tab.label}</span>
              <button className="close-btn" onClick={() => onCloseTab(tab.id)}>&times;</button>
            </div>
          ))}
        </div>
        <div className="top-right">
          <button className="icon-button" onClick={toggleColorPalette}>
            <FaPalette />
          </button>
          <button className="icon-button" onClick={toggleLanguage}>
            <FaGlobe />
          </button>
        </div>
      </div>

      <div className="main-layout">
        <nav className="sidebar">
          <ul>
            <li
              className={currentTab === '_home' ? 'active' : ''}
              onClick={() => onAddTab({ id: '_home', label: '_home' })}
            >
              _home
            </li>
            <li
              className={`expandable ${isWorkExpanded ? 'expanded' : ''} ${['_bio', '_my_stack', '_projects'].includes(currentTab) ? 'active' : ''}`}
              onClick={handleWorkToggle}
            >
              _work
            </li>
            {isWorkExpanded && (
              <ul>
                <li
                  className={`child ${currentTab === '_bio' ? 'active' : ''}`}
                  onClick={() => onAddTab({ id: '_bio', label: '_bio' })}
                >
                  _bio
                </li>
                <li
                  className={`child ${currentTab === '_my_stack' ? 'active' : ''}`}
                  onClick={() => onAddTab({ id: '_my_stack', label: '_my_stack' })}
                >
                  _my_stack
                </li>
                <li
                  className={`child ${currentTab === '_projects' ? 'active' : ''}`}
                  onClick={() => onAddTab({ id: '_projects', label: '_projects' })}
                >
                  _projects
                </li>
              </ul>
            )}
            <li
              className={currentTab === '_contact' ? 'active' : ''}
              onClick={() => onAddTab({ id: '_contact', label: '_contact' })}
            >
              _contact
            </li>
          </ul>
        </nav>
        <div className="main-content">{children}</div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-left">
          <span><a href='#' onClick={()=>  onTabClick('_contact')}>crisilto1997@gmail.com</a></span>
        </div>
        <div className="bottom-right">
          <a href="https://github.com/crisilto" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/crisilto" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activeTabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onAddTab: PropTypes.func.isRequired,
  onCloseTab: PropTypes.func.isRequired,
  toggleColorPalette: PropTypes.func,
  toggleLanguage: PropTypes.func,
};

export default Layout;
