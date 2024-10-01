import { useEffect, useState } from 'react';
import './App.css';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
import { useLanguage } from './context/LanguageContext';

const App = () => {
  const { language, toggleLanguage } = useLanguage();
  const [activeTabs, setActiveTabs] = useState([{ id: '_home', label: '_home' }]);
  const [currentTab, setCurrentTab] = useState('_home');

  const getTabLabel = (tabId) => {
    switch (tabId) {
      case '_home':
        return language === 'en' ? '_home' : '_inicio';
      case '_bio':
        return language === 'en' ? '_bio' : '_biografía';
      case '_projects':
        return language === 'en' ? '_projects' : '_proyectos';
      case '_contact':
        return language === 'en' ? '_contact' : '_contacto';
      default:
        return tabId;
    }
  };

  useEffect(() => {
    const updatedTabs = activeTabs.map((tab) => ({
      ...tab,
      label: getTabLabel(tab.id),
    }));
    setActiveTabs(updatedTabs);
  }, [language]);

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
  };

  const handleAddTab = (tab) => {
    if (!activeTabs.some((t) => t.id === tab.id)) {
      setActiveTabs([...activeTabs, tab]);
    }
    setCurrentTab(tab.id);
  };

  const handleCloseTab = (tabId) => {
    const updatedTabs = activeTabs.filter((tab) => tab.id !== tabId);
    setActiveTabs(updatedTabs);
    if (currentTab === tabId) {
      setCurrentTab(updatedTabs.length ? updatedTabs[0].id : '_home');
    }
  };

  const renderContent = () => {
    switch (currentTab) {
      case '_home':
        return <Home language={language} />;
      case '_bio':
        return <Bio language={language} />;
      case '_projects':
        return <Projects language={language} />;
      case '_contact':
        return <Contact language={language} />;
      default:
        return null;
    }
  };

  return (
    <Layout
      activeTabs={activeTabs}
      currentTab={currentTab}
      onTabClick={handleTabClick}
      onAddTab={handleAddTab}
      onCloseTab={handleCloseTab}
      toggleLanguage={toggleLanguage}
      language={language}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;