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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSubteamId, setSelectedSubteamId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
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
        return <Home />;
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
