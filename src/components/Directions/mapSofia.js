import React from 'react';

const MapSofia = () => {
  const sofia = require("../../images/sofiakyrka.png");

  return (
    <div className="map">
      <a href="https://goo.gl/maps/9g2f8Q4fA6TT6krq8" target="_blank" rel="noopener noreferrer"><img src={sofia} alt="sofia" /></a>
    </div>
  );
}

export default MapSofia;
