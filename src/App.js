// App.js
import './main.css';
import LandingPage from './pages/landdingPage/LandingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Exercises from "./pages/exercises/Exercises";
import RenderContent from "./utils/RenderContent";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <RenderContent />

        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signup/welcome" element={<Welcome />} />
          <Route path="/signup/details" element={<UserData />} />
          <Route path="/signup/goals" element={<UserGoals />} />
          <Route path="/signup/bodycount" element={<BodyCount />} />

          <Route path="/signin" element={<Signin />} />

          <Route path="/home" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
        <Render />
      </Router>
    </div>
  );
}

export default App;
