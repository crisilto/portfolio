// src/components/Header.jsx
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = ({ onTabClick }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => onTabClick('_home')}>_home</li>
        <li onClick={() => onTabClick('_work')}>_work</li>
        <ul>
          <li onClick={() => onTabClick('_bio')}>_bio</li>
          <li onClick={() => onTabClick('_my_stack')}>_my_stack</li>
          <li onClick={() => onTabClick('_projects')}>_projects</li>
        </ul>
        <li onClick={() => onTabClick('_contact')}>_contact</li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  onTabClick: PropTypes.func.isRequired,
};

export default Header;
