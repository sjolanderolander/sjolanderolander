import React from 'react';

const therese = require('../../images/therese.png');
const jojjo = require('../../images/jojjo.png');
const jojjotherese = require('../../images/jojjotherese.jpg');

const Toastmasters = () => {
  return (
      <div className="toastmadamesContainer">
          <div className="toastmadamesBorder">
            <div className="toastmadameText">
              <h5>Let us present, the</h5>
              <h3>Toastmadames!</h3>
              <p>Till middagen har vi äran att bli vägledda av de här två madamerna, som båda har en väldigt speciell plats i vårt förhållande.</p>
              <p>Ni når dem på toastmadames@sjolanderolander.se</p>
            </div>
            <div className="toastmadameContainer">
              <div className="toastmadame">
                <div className="toastmadameImg">
                  <img src={jojjotherese} alt="Toastmadames"/>
                </div>
                <div className="toastmadameInfo">
                  <h2>Josefine Gillver</h2>
                  <p>Energiknippet och glädjespridaren. Josefine har funnits i Lindas liv sedan barnsben, och har både varit sambo med Linda och Max.</p>
                </div>
              </div>
              <div className="toastmadame">
                <div className="toastmadameImg">
                  <img src={therese} alt="Toastmaster"/>
                </div>
                <div className="toastmadameInfo">
                  <h2>Therese Olander</h2>
                  <p>Therese fick en tidigare debut i Lindas liv, redan från BB faktiskt. Inte en dag går utan kontakt, både med Linda och Max.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Toastmasters;
