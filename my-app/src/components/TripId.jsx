import React, { Component } from 'react';
const uuidv4 = require('uuid/v4');

class TripId extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tripId: uuidv4(),
      email: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 || this.state.tripId.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div name="enter-email">
        <form onSubmit={this.handleSubmit}>
            <p>Enter email to generate new Trip Id: </p>
            <input
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <p>Enter existing Trip Id: </p>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="tripId"
            />
          <input
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          />
        </form>
      </div>
    );
  }
}
  // render() {
  //   return(
  //     <header>
  //       <form>
  //         <label>
  //           Create New Trip ID:
  //           <input type="text" name="name" placeholder="Enter Email" />
  //         </label>
  //           <input type="submit" value="Submit" />
  //       </form>
  //       <form>
  //         <label>
  //           Enter Existing Trip ID:
  //           <input type="text" name="name" placeholder="Enter Trip ID" />
  //         </label>
  //           <input type="submit" value="Submit" />
  //       </form>
  //       </header>
  //     )
  //   }

export default TripId