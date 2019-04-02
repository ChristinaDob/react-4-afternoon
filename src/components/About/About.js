/* About will be the about page displaying information about the University.

History will be a nested view with the about page and will display the history of the university.

Contact will be a nested view with the about page and will display the University's contact information. */

import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>

        {/* Inside the div with the className box, add a Switch component. */}
        <div className="box">
          <Switch>
            {/* Add 3 routes inside the Switch component:
            The first two should route the History and Contact components.
            Hint: the paths for these components are the same values used in the "to" prop on the Link components. */}
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />

            {/* The third route should render JSX ( instead of a component ) at the exact path of /about. */}
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1 className="title">About the University</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
