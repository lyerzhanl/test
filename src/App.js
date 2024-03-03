// App.js
import './main.css';
import LandingPage from './pages/landdingPage/LandingPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';

import ScrollTop from './utils/ScrollTop';
import Welcome from './pages/registration/welcome/Welcome';
import Render from './utils/Render';
import UserData from './pages/registration/userData/UserData';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import UserGoals from './pages/registration/userGoals/UserGoals';
import BodyCount from './pages/registration/bodyCount/BodyCount';
import Signin from './pages/authorization/Signin';
import Home from './pages/home/Home';
import Exercises from './pages/exercises/Exercises';
import RenderContent from './utils/RenderContent';
import PrivateRoute from './helpers/PrivateRoute';

import keycloak from './keycloak/Keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import TrainingPrograms from './pages/trainingPrograms/TrainingPrograms';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <ReactKeycloakProvider authClient={keycloak}>
          <ScrollTop />
          <RenderContent />

          <Routes>
            <Route path="/test/" exact element={<LandingPage />} />
            <Route path="/test/about" element={<About />} />
            <Route path="/test/contacts" element={<Contacts />} />
            <Route path="/test/signup/welcome" element={<Welcome />} />
            <Route path="/test/signup/details" element={<UserData />} />
            <Route path="/test/signup/goals" element={<UserGoals />} />
            <Route path="/test/signup/bodycount" element={<BodyCount />} />
            <Route path="/test/signin" element={<Signin />} />
            <Route path="/test/exercises" element={<Exercises />} />
            <Route path="/test/profile" element={<Profile />} />
            <Route path="/test/training_programs" element={<TrainingPrograms />} />
          </Routes>

          <Render />
        </ReactKeycloakProvider>
      </Router>
    </div>
  );
}

export default App;
