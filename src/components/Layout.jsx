import PropTypes from "prop-types";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import useLanguage from '../context/useLanguage';
import "../styles/Layout.css";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";

const Layout = ({
  children,
  activeTabs,
  currentTab,
  onTabClick,
  onAddTab,
  onCloseTab,
  toggleLanguage,
}) => {
  const { language } = useLanguage();

  return (
    <div className="layout-container">
      <Header
        onTabClick={onTabClick}
        language={language}
        onAddTab={onAddTab}
        currentTab={currentTab}
      />

      <div className="top-bar">
        <span className="username">
          <a
            href="#"
            onClick={() => {
              onAddTab({
                id: "_home",
                label: language === "en" ? "_home" : "_inicio",
              });
              onTabClick("_home");
            }}
          >
            Crisilto
          </a>
        </span>

        <div className="tabs-header">
          {activeTabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${tab.id === currentTab ? "active" : ""}`}
            >
              <span onClick={() => onTabClick(tab.id)}>{tab.label}</span>
              <button className="close-btn" onClick={() => onCloseTab(tab.id)}>
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="top-right">
          <MobileSidebar
            onTabClick={onTabClick}
            onAddTab={onAddTab}
            language={language}
          />
          <button className="icon-button" onClick={toggleLanguage}>
            <FaGlobe />
          </button>
        </div>

      </div>

      <div className="main-layout">
        <div className="main-content">{children}</div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-left">
          <span>
            <a
              href="mailto:crisilto1997@gmail.com?subject=PORTFOLIO:%20Cristina%20Silvestre"
            >
              crisilto1997@gmail.com
            </a>
          </span>
        </div>
        <div className="bottom-right">
          <a
            href="https://github.com/crisilto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/crisilto"
            target="_blank"
            rel="noopener noreferrer"
          >
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
  toggleLanguage: PropTypes.func,
  language: PropTypes.string,
};

export default Layout;
