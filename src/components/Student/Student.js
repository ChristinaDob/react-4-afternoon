/* Student will be the detail view for a particular student. */

import React, { Component } from 'react';
import axios from 'axios';

/* we'll update the Student component to display a specific student's information. To get this data, we'll look at the id route parameter and use it in combination with an axios HTTP request to our json-server. */

export default class Student extends Component {
  /* Create a constructor method that initializes state with a property called studentInfo. */

  /* We'll need a place to store our data from hitting the API, let's update the constructor method to have a property called studentInfo that defaults to an empty object. */
  constructor(props) {
    super(props);

    this.state = {
      /* studentInfo should default to an empty object. */
      studentInfo: {}
    };
  }

  /* Create a componentDidMount method that makes an HTTP request to the json-server */

  /* The json-server API url is http://localhost:3005/students/ID_GOES_HERE.
  ID_GOES_HERE should equal the student's id.
  Hint: react-router-dom passes down a match object on a component's props. */

  /* Use the returned data from the API request to update the studentInfo object on state. */

  componentDidMount() {
    /* Now that we have somewhere to store the data, let's create a componentDidMount method. Inside this method let's use axios to make a GET request to http://localhost:3005/students/ID_GOES_HERE. Similarly to ClassList, we can access the id for the given student on the match object that react-router-dom passes into our routeable components. */
    return axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        /* Let's capture the results of this GET request and use the data to update the value of studentInfo on state. */
        this.setState({
          studentInfo: results.data
        });
      });
  }

  render() {
    return (
      <div className="box">
        <h1>Student:</h1>

        {/* Underneath the h1 tag, display studentInfo properties off of state:
        first_name and last_name within an h1 tag. */}

        {/* Now that we have the student data coming in, we can go into the render method and display the pieces of the student's information. Let's put the student's first_name and last_name within a h1 tag and let's put the grade and email in their own h3 tags. */}
        <h1>
          {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
        </h1>
        {/* The text Grade: followed by the grade property within an h3 tag. */}
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        {/* The text Email: followed by the email property within an h3 tag. */}
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
