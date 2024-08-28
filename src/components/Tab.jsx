import PropTypes from 'prop-types';
import '../styles/Tab.css';

const Tab = ({ activeTabs, onCloseTab, children }) => {
  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {activeTabs.map((tab) => (
          <div key={tab} className="tab">
            <span>{tab}</span>
            <button className="close-btn" onClick={() => onCloseTab(tab)}>
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {children}
      </div>
    </div>
  );
};

Tab.propTypes = {
  activeTabs: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onCloseTab: PropTypes.func.isRequired, 
  children: PropTypes.node, 
};

export default Tab;
