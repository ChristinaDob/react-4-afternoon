import React from 'react';
// At the top of this file we'll need to import React from react and also import Switch and Route from react-router-dom.
import { Switch, Route } from 'react-router-dom';
// We'll also want to import the components that we want the user to be able to route to. In this case, let's import the Home and About component.
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

//  we can use an export default statement to export a router. We'll need an exact route at / to load the Home component and a route at /about to load the About component.
export default (
  /* Use the following combinations of paths and components for your routes:
  Path: "/" - Component: Home - This path should be exact.
  Path: "/about" - Component: About. */
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    {/* For this component, we are going to make use of routing parameters. This will allow us to use a single component that can know what dataset to load by looking at the parameter. */}

    {/* The :class indicates a route parameter called class in the url. */}
    <Route path="/classlist/:class" component={ClassList} />
    <Route path="/student/:id" component={Student} />

    {/* Create a Student route with the following properties:
     Path: /student/:id - Component: Student. */}

    {/* We'll need to make a new route for this Student component that uses an id route parameter. Similarly to how we did it with the ClassList component, we can use axios to fetch a specific student on load by making a match to the id property. */}
  </Switch>
);
