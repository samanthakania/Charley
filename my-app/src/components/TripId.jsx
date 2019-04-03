import React, { Component } from 'react';
const uuidv4 = require('uuid/v4');

class TripId extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tripId: uuidv4(),
      email: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
  }

  handleChange = event => {
    this.setState({
      tripId: uuidv4()
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
    })
  }

  render() {
    return (
      <div name="enter-email">
        <form onSubmit={this.handleSubmit}>
            <p>Enter email to generate new Trip Id: </p>
            <input
              autoFocus
              type="email"
              value={this.props.email}
              onChange={this.handleChange}
            />
            <input
            block
            bsSize="large"
            type="submit"
          />
            <p>Enter existing Trip Id: </p>
            <input
              value={this.props.tripId}
              type="tripId"
              onChange={this.handleChange}
            />
          <input
            block
            bsSize="large"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default TripId