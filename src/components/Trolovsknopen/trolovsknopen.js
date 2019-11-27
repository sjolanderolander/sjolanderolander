import React from 'react';
//https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Figure-eight_knot.svg/1200px-Figure-eight_knot.svg.png

const Trolovsknopen = () => {
  const knop1 = require('../../images/knop1.png');
  const knop2 = require('../../images/knop2b.png');
  const knop3 = require('../../images/knop3.png');
  return (
    <div className="trolovsknopen divider">
      <h2>Trolovsknopen</h2>
      <div className="trolovsknopenContainer">
        <div className="knop">
          <img src={knop1} alt="Knop 1"/>
          <p>Knopen härstammar från 'True Lovers Knot'. Enligt sägnen skickade sjömän hem den till sin älskade som ett frieri. Skickades knopen tillbaka till sjömannen i samma form var det en uppmaning att fortsätta uppvaktningen.</p>
        </div>
        <div className="knop">
          <img src={knop2} alt="Knop 2"/>
          <p>Om de två knutarna drogs ihop mot varandra och skickades tillbaka, var det en bekräftelse på att känslorna var besvarade och frieriet var accepterat.</p>
        </div>
        <div className="knop">
          <img src={knop3} alt="Knop 3"/>
          <p>Om knopen sändes tillbaka uppknuten var kärleken inte besvarad och att ett frieri inte var att tänka på.</p>
        </div>
      </div>
    </div>
  );
}

export default Trolovsknopen;
