import React from 'react';

const MapTurbinhallen = () => {
  const turbinhallen = require("../../images/turbinhallen.png");

  return (
    <div className="map">
      <a href="https://goo.gl/maps/4UJ4fufYx6dgCbU39" target="_blank" rel="noopener noreferrer"><img src={turbinhallen} alt="Turbinhallen" /></a>
    </div>
    );
}

export default MapTurbinhallen;
