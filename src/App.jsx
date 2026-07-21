import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubTeams from './pages/SubTeams';
import SubTeamDetail from './pages/SubTeamDetail';
import Leadership from './pages/Leadership';
import Mentors from './pages/Mentors';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import PastGallery from './pages/PastGallery';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSubteamId, setSelectedSubteamId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onViewPastGallery={() => { setCurrentPage('past-gallery'); window.scrollTo(0, 0); }} />;
      case 'past-gallery':
        return <PastGallery onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />;
      case 'subteams':
        return (
          <SubTeams
            onSelectSubteam={(subteamId) => {
              setSelectedSubteamId(subteamId);
              setCurrentPage('subteam-detail');
              window.scrollTo(0, 0);
            }}
          />
        );
      case 'subteam-detail':
        return (
          <SubTeamDetail
            subteamId={selectedSubteamId}
            onBack={() => {
              setCurrentPage('subteams');
              window.scrollTo(0, 0);
            }}
          />
        );
      case 'leadership':
        return <Leadership />;
      case 'mentors':
        return <Mentors />;
      case 'sponsors':
        return <Sponsors setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onViewPastGallery={() => { setCurrentPage('past-gallery'); window.scrollTo(0, 0); }} />;
    }
  };

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
