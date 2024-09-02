// src/App.jsx
import { useState } from 'react';
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
        return <Home language={language}/>;
      case '_bio':
        return <Bio language={language}/>;
      case '_my_stack':
        return <MyStack language={language}/>;
      case '_projects':
        return <Projects language={language}/>;
      case '_contact':
        return <Contact language={language}/>;
      default:
        return null;
    }
  };

  const sections = [
    { id: '_home', label: '_home' },
    { id: '_work', label: '_work', children: ['_bio', '_my_stack', '_projects'] },
    { id: '_contact', label: '_contact' }
  ];

  return (
    <Layout
      activeTabs={activeTabs}
      currentTab={currentTab}
      onTabClick={handleTabClick}
      onAddTab={handleAddTab}
      onCloseTab={handleCloseTab}
      sections={sections}
      toggleLanguage={toggleLanguage}
      language={language}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;