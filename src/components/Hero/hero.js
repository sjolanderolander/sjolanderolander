import React from 'react';

const Hero = () => {
  const logo = require('../../images/logo.png');
  return (
    <div className="hero center">
      <img src={logo} alt="logo"/>
      <div className="heroInfo">
        <p>22 maj 2021</p>
        <p>Sofia Kyrka</p>
      </div>
    </div>
  );
}

export default Hero;
