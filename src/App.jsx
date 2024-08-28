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
        return <Home />;
      case '_bio':
        return <Bio />;
      case '_my_stack':
        return <MyStack />;
      case '_projects':
        return <Projects />;
      case '_contact':
        return <Contact />;
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
    >
      {renderContent()}
    </Layout>
  );
};

export default App;