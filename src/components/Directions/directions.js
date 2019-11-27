import React from 'react';
import MapSofia from './mapSofia';
import MapTurbinhallen from './mapTurbinhallen';

const Directions = () => {
  return (
      <div className="divider directions">
        <div className="directionsMap">
          <MapSofia />
            <p>Kl 14.00 är ni välkomna till Sofia kyrka, som ligger på Stora Mejtens gränd i Vitabergsparken. Dit tar ni er enklast med buss 2 eller 3 från Slussen.</p>
        </div>
        <div className="directionsMap">
          <MapTurbinhallen />
            <p>Efter vigseln blir det middag i Turbinhallen i Järla Sjö! Adressen är Gustaf de Lavals torg 8, Nacka.</p>
        </div>
      </div>
  );
}

export default Directions;
