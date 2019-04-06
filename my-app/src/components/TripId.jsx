import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

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
    let tripId = uuidv4(6);
    event.preventDefault();
    console.log("hit here yo")
    window.fetch('/users/create_route', {
      method: 'POST',
      body: JSON.stringify({email: this.state.email,
        trip_id: tripId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async resp => await resp.json())
      .then((json) => {
      
        // console.log("hit", json)
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
      let todos = []
      let output = []
      const origin = json.route.origin;  
      const destination = json.route.destination;
      const tripId = json.route.trip_id;
      const listId = json.list_id;
      json.todo_list.forEach((item) => {
        let formatter = { text: item.todo_item, isCompleted: item.is_completed }
      todos.push(formatter)
      })
    json.parks.forEach( (park) => {
  let latLong ={  lat: park.lat, long: park.long }
   output.push(latLong)
})
  console.log('HELLLLLLLLLLLLLOOOOOOo', json)      
this.props.search(origin, destination, tripId, listId, output, todos);

      })
      .catch(err => console.log(err))
 
}

  


  render() {
    if (this.state.tripId) {
      console.log("Redirect to", `/trip/${this.state.tripId}`)
      return <Redirect to={`/trip/${this.state.tripId}`} />
    }
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
