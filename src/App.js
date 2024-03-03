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
            <Route path="/workout-web-app/" exact element={<LandingPage />} />
            <Route path="/workout-web-app/about" element={<About />} />
            <Route path="/workout-web-app/contacts" element={<Contacts />} />
            <Route path="/workout-web-app/signup/welcome" element={<Welcome />} />
            <Route path="/workout-web-app/signup/details" element={<UserData />} />
            <Route path="/workout-web-app/signup/goals" element={<UserGoals />} />
            <Route path="/workout-web-app/signup/bodycount" element={<BodyCount />} />
            <Route path="/workout-web-app/signin" element={<Signin />} />
            <Route path="/workout-web-app/exercises" element={<Exercises />} />
            <Route path="/workout-web-app/profile" element={<Profile />} />
            <Route path="/workout-web-app/training_programs" element={<TrainingPrograms />} />
          </Routes>
          
          <Render />
        </ReactKeycloakProvider>
      </Router>
    </div>
  );
}

export default App;
