import React from 'react';
import GuestbookItem from './guestbookItem.js';
import Form from './form.js';
const guestbookJson = require("../../guestbookitems.json");

const Guestbook = () => {
  return (
    <div className="guestbook">
      <div className="guestbookFormInput">
        <h3>Lämna ett avtryck!</h3>
        <Form />
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
