/* ClassList will display all the enrolled students for that specific class. */

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/* we will update the ClassList component to display the students enrolled for that specific class. To get this data, we will look at what the class route parameter equals and make an HTTP request to our json-server. */

export default class ClassList extends Component {
  /* Create a constructor method that initializes state with a property called students.
  students should default to an empty array. */

  /* In the constructor method, let's initialize state to have a property called students that equals an empty array. This is where we'll store our returned data from hitting the json-server */
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }

  // Create a componentDidMount method that makes a HTTP request to the json-server

  // let's create a componentDidMount lifecycle method. This will allow us to get our students as soon as possible.
  componentDidMount() {
    axios
      .get(
        /* let's make a GET request to the API url: http://localhost:3005/students?class= where class equals the current class page. */

        /* our GET request url should look like: http://localhost:3005/students?class=${this.props.match.params.class }. We can then capture the results of this API request and use setState to update the value of students to be the result's data. */
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }

  render() {
    /* Now that we have our students coming in from our json-server, let's use a map in the render method to render each student's first and last name in a h3 element. Remember the react requires mapped elements to have a unique key property. In this case, we'll just use the index of the map */

    /* We'll need to update our map in the render method to wrap the h3 element in a Link component. */

    /* Wrap the h3 tag with a Link component. */

    const students = this.state.students.map((student, i) => (
      /* Assign the "to" prop for the Link component to /student/:id, where id should equal the student's ID.
      Remember to move the unique key prop to the outer most element of the map. */

      /* We'll also need to move the key prop onto the Link component since it'll now be the most parent item.
       */
      <Link to={`/student/${student.id}`} key={i}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ));

    return (
      <div className="box">
        {/* react-router-dom automatically passes down a couple handy props into the routeable components. One of them is called match. It is an object with a bunch of useful information. One of the properties on match is called params. This is where we can see the value of any route parameters. Our route parameter is called class. Therefore, we can access it by using this.props.match.params.class. */}

        <h1>{this.props.match.params.class}</h1>

        {/* we just need to update the h1 element to display the current class. Just like how we accessed the route parameter for our axios request, we can do the same thing here using { } in our JSX. */}
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}
