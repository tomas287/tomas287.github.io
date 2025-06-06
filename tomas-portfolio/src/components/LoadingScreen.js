import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'; // Add your own logo image
import './LoadingScreen.css'; // We'll add animation here

const LoadingScreen = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 4000); // start zoom
    const timer2 = setTimeout(onFinish, 6000); // move to next screen

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <img src={logo} alt="Logo" className={`logo ${animate ? 'zoom fade-out' : ''}`} />
      {!animate && <div className="spinner"></div>}
    </div>
  );
};

export default LoadingScreen;