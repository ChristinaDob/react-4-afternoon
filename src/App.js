/* App will be the top level component for our application. */

import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
//  we need to actually render our router. Open App.js and import our routes file.
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      //We'll need to wrap our react application with this HashRouter component in order for routing to work.

      //Wrap the outer most div component in a HashRouter component.

      <HashRouter>
        <div>
          <nav className="nav">
            <div>WestSide University</div>
            <div className="link-wrap">
              {/* The Link component will allow us to add clickable links into the DOM so the user can navigate the application */}

              {/* The Link component uses a to prop to determine which route to navigate to. For the home route, we'll want to use /, and for the about route, we'll want to use /about. */}
              <Link to="/" className="links">
                Home
              </Link>
              <Link to="/about" className="links">
                About
              </Link>
            </div>
          </nav>
          {/* Render the routes JSX underneath the nav element. */}

          {/* Add the routes to the render method, right below the nav element. Remember that using {} allows us to escape from JSX and reference a variable */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}
