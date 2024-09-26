import { useEffect, useState } from 'react';
import './App.css';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import MyStack from './components/MyStack';
import Projects from './components/Projects';

const App = () => {
  const [activeTabs, setActiveTabs] = useState([{ id: '_home', label: '_home' }]);
  const [currentTab, setCurrentTab] = useState('_home');
  const [language, setLanguage] = useState('en');

  //TODO: Change this switch to cleaner way to do this functionality.
  useEffect(() => {
    const updatedTabs = activeTabs.map((tab) => {
      const newLabel = getTabLabel(tab.id, language); //Function to obtain the new label.

      //Only update the page if the label has changed.
      if (tab.label !== newLabel) {
        return { ...tab, label: newLabel };
      }
      return tab;
    });

    setActiveTabs(updatedTabs);
  }, [language, activeTabs]);

  const getTabLabel = (tabId, lang) => {
    switch (tabId) {
      case '_home':
        return lang === 'en' ? '_home' : '_inicio';
      case '_bio':
        return lang === 'en' ? '_bio' : '_biografía';
      case '_my_stack':
        return lang === 'en' ? '_my_stack' : '_mi_stack';
      case '_projects':
        return lang === 'en' ? '_projects' : '_proyectos';
      case '_contact':
        return lang === 'en' ? '_contact' : '_contacto';
      default:
        return tabId;
    }
  };

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

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };

  const renderContent = () => {
    switch (currentTab) {
      case '_home':
        return <Home language={language} />;
      case '_bio':
        return <Bio language={language} />;
      case '_my_stack':
        return <MyStack language={language} />;
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