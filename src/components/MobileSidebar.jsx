import PropTypes from 'prop-types';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/MobileSidebar.css";

const MobileSidebar = ({ onTabClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(false);

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
            <li onClick={() => { onTabClick("_home"); setMenuOpen(false); }}>_home</li>
            <li className={`mobile-expandable ${workExpanded ? 'expanded' : ''}`} onClick={toggleWorkSubmenu}>
              <span>_work</span>
              <ul className={`mobile-submenu ${workExpanded ? 'expanded' : ''}`}>
                <li onClick={() => { onTabClick("_bio"); setMenuOpen(false); }}>_bio</li>
                <li onClick={() => { onTabClick("_my_stack"); setMenuOpen(false); }}>_my_stack</li>
                <li onClick={() => { onTabClick("_projects"); setMenuOpen(false); }}>_projects</li>
              </ul>
            </li>
            <li onClick={() => { onTabClick("_contact"); setMenuOpen(false); }}>_contact</li>
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
