// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';
import CommunityEmpowermentHub from './components/CommunityEmpowermentHub';
import EducationalResources from './components/EducationalResources';
import ClimateJusticeEventsCalendar from './components/ClimateJusticeEventsCalendar';
import InteractiveMaps from './components/InteractiveMaps';
import AdvocacyToolkit from './components/AdvocacyToolkit';
import UserProfile from './components/UserProfile';
import PushNotifications from './components/PushNotifications';
import LandingPage from './components/LandingPage';
import ModulesPage from './components/ModulesPage'; // Import the new component
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userCredentials, setUserCredentials] = useState({});

  const testUsername = 'timothybaraka39@gmail.com';
  const testPassword = 'aluru';

  const handleLogin = (username, password) => {
    if (username === testUsername && password === testPassword) {
      setIsAuthenticated(true);
      setUserCredentials({ username, password });
    } else {
      setIsAuthenticated(false);
      setUserCredentials({});
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/main"
            element={
              isAuthenticated ? (
                <>
                  <UserProfile />
                  <NewsFeed />
                  <CommunityEmpowermentHub />
                  <EducationalResources />
                  <ClimateJusticeEventsCalendar />
                  <AdvocacyToolkit />
                  <PushNotifications />
                  <InteractiveMaps />
                  <Footer/> 
                </>
              ) : (
                <LandingPage handleLogin={handleLogin} />
              )
            }
          />
          <Route path="/modules/:courseId" element={<ModulesPage />} /> {/* Add the new route */}
          <Route path="/" element={<LandingPage handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
