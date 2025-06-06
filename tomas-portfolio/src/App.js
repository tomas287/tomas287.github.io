import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ProfileSelect from './components/ProfileSelect';
import ProfileView from './components/ProfileView';

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
      </Routes>
    </Router>
  );
}

export default App;