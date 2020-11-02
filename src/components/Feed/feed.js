import React from 'react';

const Feed = () => {
  const inspiration = require('../../images/inspiration.jpg');
  const sofia = require('../../images/sofia.png');
  const inbjudan = require('../../images/inbjudan.jpg');
  const forlovning = require('../../images/forlovning1.jpg');
  const covid = require('../../images/covid.jpg');

  return (
    <div className="feedContainer">
      <div className="feedLeft">
        <h3>Tittut!</h3>
        <p>Här skriver vi nyheter,</p>
        <p>så kika in då och då.</p>
        <h5>Kram Max och Linda</h5>
      </div>
      <div className="feedRight">
        <div className="feed">
          <div className="feedImage"><img src={covid} alt="Inspiration" /></div>
          <h5>mars 2020</h5>
          <p>Covid kom och vände upp och ner på världen och vi flyttade bröllopet till 22 maj 2021.</p>
        </div>
        <div className="feed">
          <div className="feedImage"><img src={inbjudan} alt="Inspiration" /></div>
          <h5>nov 2019</h5>
          <p>Inbjudan på väg till er!</p>
        </div>
        <div className="feed">
          <div className="feedImage"><img src={sofia} alt="Sofia" /></div>
          <h5>aug 2019</h5>
          <p>Vi hittade vår kyrka!</p>
        </div>
        <div className="feed">
          <div className="feedImage"><img src={inspiration} alt="Inspiration" /></div>
          <h5>maj 2019</h5>
          <p>Vi letade inspiration!</p>
        </div>
        <div className="feed">
          <div className="feedImage"><img src={forlovning} alt="Förlovning" /></div>
          <h5>nyårsafton 2018</h5>
          <p>Vi förlovade oss!</p>
        </div>
      </div>
    </div>
  )
}

export default Feed;
