// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import NewsFeed from './components/NewsFeed';
import CommunityEmpowermentHub from './components/CommunityEmpowermentHub';
import EducationalResources from './components/EducationalResources';
import ClimateJusticeEventsCalendar from './components/ClimateJusticeEventsCalendar';
import InteractiveMaps from './components/InteractiveMaps';
import AdvocacyToolkit from './components/AdvocacyToolkit';
import UserProfile from './components/UserProfile';
import PushNotifications from './components/PushNotifications';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Use these test details for authentication
  const testUsername = 'testuser';
  const testPassword = 'testpassword';

  const handleLogin = (username, password) => {
    // Simulate authentication logic
    if (username === testUsername && password === testPassword) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/main" element={ // Use 'element' instead of 'component'
            isAuthenticated ? (
              <>
                <NewsFeed />
                <CommunityEmpowermentHub />
                <EducationalResources />
                <ClimateJusticeEventsCalendar />
                <InteractiveMaps />
                <AdvocacyToolkit />
                <UserProfile />
                <PushNotifications />
              </>
            ) : (
              <LandingPage handleLogin={handleLogin} />
            )}
          />
          <Route path="/" element={<LandingPage handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


