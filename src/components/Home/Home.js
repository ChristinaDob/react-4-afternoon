/* Home will be the home page displayed when the application first loads. It will also display the available classes. */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to="/classlist/MATH1010">
          {/* let's update those buttons to be wrapped in a Link component. */}
          {/* Wrap each button element with a Link component. */}
          <button className="btn">Math 1010</button>
        </Link>
        <Link to="/classlist/ENG2010">
          <button className="btn">English 2010</button>
        </Link>
        <Link to="/classlist/BIO2020">
          <button className="btn">Biology 2020</button>
        </Link>
      </div>
      /* The Home component renders three buttons for the classes, let's update those buttons to be wrapped in a Link component. For Math, we'll want to route /classlist/MATH1010. For English, we'll want to route to /classlist/ENG2010. And for Biology, we'll want to route to /classlist/BIO2020. If you're wondering why it's specifically MATH1010, ENG2010, and BIO2020; it's so that we can map over the db.json and make a class match. A student's class property will equal one of those three strings. */
    );
  }
}
