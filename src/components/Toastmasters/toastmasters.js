import React, {useState} from 'react';

// const therese = require('../../images/therese.png');
// const jojjo = require('../../images/jojjo.png');
const jojjotherese = require('../../images/jojjotherese.jpg');
const jojjotheresebarn = require('../../images/jojjotheresebarn.jpg');

const Toastmasters = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  }

  return (
      <div className="toastmasters">
        <div className="toastmaster pink">
          <div className="border">
            <div className="toastmasterImage">
              {!click &&
              <div className="toastmasterImg">
                <img src={jojjotherese} alt="Toastmadame" onClick={handleClick}/>
              </div>
              }
              {click &&
                <div className="toastmasterImg">
                  <img src={jojjotheresebarn} alt="Toastmadame" onClick={handleClick}/>
                </div>
              }
              <h2>Therese & Josefine</h2>
            </div>
            <div className="toastmasterInfo">
              <h3>Toastmadames!</h3>
              <p>Till middagen har vi äran att bli toastade av de här två madamerna, som båda har en väldigt speciell plats i vårt förhållande. Utan Josefine skulle vi kanske aldrig träffats. Therese har en förmåga att få en potatis att skratta, och Josefine kan koka en soppa på en spik. Ett riktigt dream team med andra ord.</p>
              <a href="mailto:toastmadames@sjolanderolander.se"><button>Maila Toastmadames</button></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Toastmasters;
