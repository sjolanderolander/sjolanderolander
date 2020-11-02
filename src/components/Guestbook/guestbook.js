import React from 'react';
import GuestbookItem from './guestbookItem.js';
import Form from './form.js';
const guestbookJson = require("../../guestbookitems.json");

const Guestbook = () => {
  return (
    <div className="guestbook">
      <div className="guestbookFormInput">
        <a href="mailto:sjolanderolander@gmail.com"><h3>Lämna ett avtryck här!</h3></a>
        {/* <Form /> */}
      </div>
      <div className="guestbookItems">
        {guestbookJson.guestbookitems.map((item) => {
        return <GuestbookItem
                message={item.message}
                author={item.author}/>
        })}
      </div>
    </div>
  );
}

export default Guestbook;
