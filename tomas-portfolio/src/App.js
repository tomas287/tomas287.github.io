import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ProfileSelect from './components/ProfileSelect';
import ProfileView from './components/ProfileView';
import Experience from './components/Experience';

function LoadingWrapper() {
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (done) {
      navigate('/profiles');
    }
  }, [done, navigate]);

  return <LoadingScreen onFinish={() => setDone(true)} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingWrapper />} />
        <Route path="/profiles" element={<ProfileSelect />} />
        <Route path="/profile/:type" element={<ProfileView />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/skills" element={<Experience />} />
        <Route path="/projects" element={<Experience />} />
        <Route path="/publications" element={<Experience />} />
        <Route path="/contact-me" element={<Experience />} /> */}
      </Routes>
    </Router>
  );
}

export default App;