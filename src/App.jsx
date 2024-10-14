import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import useLanguage from './context/useLanguage';

const App = () => {
  const { language, toggleLanguage } = useLanguage();
  const [activeTabs, setActiveTabs] = useState([{ id: '_home', label: '_home' }]);
  const [currentTab, setCurrentTab] = useState('_home');
  const navigate = useNavigate();

  const getTabLabel = useCallback((tabId) => {
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
  }, [language]);

  useEffect(() => {
    const updatedTabs = activeTabs.map((tab) => ({
      ...tab,
      label: getTabLabel(tab.id),
    }));

    const hasTabsChanged = activeTabs.some((tab, index) => tab.label !== updatedTabs[index].label);

    if (hasTabsChanged) {
      setActiveTabs(updatedTabs);
    }
  }, [language, getTabLabel, activeTabs]);


  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    navigate(tabId.replace('_', '/'));
  };

  const handleAddTab = (tab) => {
    if (!activeTabs.some((t) => t.id === tab.id)) {
      setActiveTabs([...activeTabs, tab]);
    }
    setCurrentTab(tab.id);
    navigate(tab.id.replace('_', '/'));
  };

  const handleCloseTab = (tabId) => {
    const updatedTabs = activeTabs.filter((tab) => tab.id !== tabId);
    setActiveTabs(updatedTabs);
    if (currentTab === tabId) {
      const newTab = updatedTabs.length ? updatedTabs[0].id : '_home';
      setCurrentTab(newTab);
      navigate(newTab.replace('_', '/'));
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
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/home" element={<Home language={language} />} />        <Route path='/bio' element={<Bio />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;