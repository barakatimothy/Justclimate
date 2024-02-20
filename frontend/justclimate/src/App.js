import NewsFeed from "./components/NewsFeed";
import CommunityEmpowermentHub from "./components/CommunityEmpowermentHub";
import EducationalResources from "./components/EducationalResources";
import ClimateJusticeEventsCalendar from "./components/ClimateJusticeEventsCalendar";
import InteractiveMaps from './components/InteractiveMaps'; 
import AdvocacyToolkit from './components/AdvocacyToolkit';
import UserProfile from "./components/UserProfile";
import PushNotifications from './components/PushNotifications';

function App() {
  return (
    <div className="App">
      <UserProfile/>
      <NewsFeed />
      <CommunityEmpowermentHub/>
      <EducationalResources />
      <ClimateJusticeEventsCalendar/>
      <InteractiveMaps/>
      <AdvocacyToolkit/>
      <PushNotifications />
    </div>
  );
}
export default App;