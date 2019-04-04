import React, { Component } from 'react';

const uuidv4 = require('uuid/v4');

class TripId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isLoggedin: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({ email:  event.target.value })

  }
  handleSubmit = event => {
  let request =  this.state
    event.preventDefault();
    console.log("hit here yo")
    console.log("hit", uuidv4(6))
    console.log()
    window.fetch('/users/create_route', {
      method: 'POST',
      body: JSON.stringify({email: this.state.email,
        trip_id: uuidv4(6) }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async resp => await resp.json())
      .then((json) => {
      
        console.log(json)
        this.props.update()
         
        
      })
    .catch(err => console.log(err))

  }
  componentDidMount() {
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

// browserHistory.push({ pathname: '/trip', state: { message: "hello, im a passed message!" } })