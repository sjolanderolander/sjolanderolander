import React from 'react';
import './App.css';
import Hero from './components/Hero/hero';
import Directions from './components/Directions/directions';
import Trolovsknopen from './components/Trolovsknopen/trolovsknopen';
import Guestbook from './components/Guestbook/guestbook';
import Osa from './components/Osa/osa';
import Slider from './components/Slider/slider';
import Toastmasters from './components/Toastmasters/toastmasters';
import Feed from './components/Feed/feed';

function App() {
  return (
    <div className="page">
      <Hero />
      <Directions />
      <Slider />
      <Feed />
      <Toastmasters />
      <Trolovsknopen />
      <Guestbook />
      <Osa />
    </div>
  );
}

export default App;
