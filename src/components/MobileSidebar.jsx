import PropTypes from 'prop-types';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/MobileSidebar.css";
import { useLanguage } from './../context/LanguageContext';

const MobileSidebar = ({ onTabClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(false);

  const { language } = useLanguage();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleWorkSubmenu = () => {
    setWorkExpanded(!workExpanded);
  };

  return (
    <div className="mobile-sidebar-container">
      <button className="icon-button mobile-menu-btn" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <nav className="mobile-sidebar">
          <ul>
            <li onClick={() => { onTabClick("_home"); setMenuOpen(false); }}>
              {language === "en" ? "_home" : "_inicio"}
            </li>
            <li
              className={`mobile-expandable ${workExpanded ? 'expanded' : ''}`}
              onClick={toggleWorkSubmenu}
            >
              <span>{language === "en" ? "_work" : "_trabajo"}</span>
              <ul className={`mobile-submenu ${workExpanded ? 'expanded' : ''}`}>
                <li onClick={() => { onTabClick("_bio"); setMenuOpen(false); }}>
                  {language === "en" ? "_bio" : "_biografía"}
                </li>
                <li onClick={() => { onTabClick("_projects"); setMenuOpen(false); }}>
                  {language === "en" ? "_projects" : "_proyectos"}
                </li>
              </ul>
            </li>
            <li onClick={() => { onTabClick("_contact"); setMenuOpen(false); }}>
              {language === "en" ? "_contact" : "_contacto"}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

MobileSidebar.propTypes = {
  onTabClick: PropTypes.func.isRequired,
};

export default MobileSidebar;