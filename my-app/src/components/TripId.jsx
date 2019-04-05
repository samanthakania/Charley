import React, { Component } from 'react';

const uuidv4 = require('uuid/v4');

class TripId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isLoggedin: false,
      searchId: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange = event => {
    this.setState({ email:  event.target.value })

  }
  handleSubmit = event => {
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
      
        let id = json.trip_id
        this.props.update(id)
         
        
      })
    .catch(err => console.log(err))

  }
  handleSearch = event => {
    this.setState({ searchId: event.target.value })

  }
  
  routeSearch = event => {
    event.preventDefault();
    window.fetch('/users/find_route', {
      method: 'POST',
      body: JSON.stringify({
        search: this.state.searchId
    
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async resp => await resp.json())
    .then((json) => {
      let output = []
      const origin = json.route.origin;
      const destination = json.route.destination;
      const tripId = json.route.trip_id;
      const listId = json.route.list_id;
      
    json.parks.forEach( (park) => {
  let latLong ={  lat: park.lat, long: park.long }
   output.push(latLong)
})
  console.log(output)      
this.props.search(origin, destination, tripId, listId, output);

      })
      .catch(err => console.log(err))
 
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
          </form>
          <form onSubmit={this.routeSearch}>
          <p>Enter existing Trip Id: </p>
          <input
            value={this.props.tripId}
            type="tripId"
            onChange={this.handleSearch}
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
