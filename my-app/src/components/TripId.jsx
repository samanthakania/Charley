import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './TripId.css';

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
  handleSubmit(event){
    event.preventDefault();
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
      
        
        this.setState({
          isLoggedIn: true
        })
        this.props.updateId(id)
        console.log('hit')
         
        
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
this.props.search(origin, destination, tripId, listId, output, todos);

      })
      .catch(err => console.log(err))
 
}

  


  render() {
 
    return (
      <div className="trip-main-container">
        <div className="input-container">
          <img id="trip-logo" src="https://github.com/ryaaanandrew/final_project/blob/master/logo_transparent_mini.png?raw=true" alt="logo"/>
          <form onSubmit={this.handleSubmit}>
            <input
              autoFocus
              className="input-field"
              type="email"
              value={this.props.email}
              onChange={this.handleChange}
              placeholder="Email"
              required
            />
            <button
              id="submit-button"
              className="btn btn-warning"
              block
              type="submit"
              value="Create a trip"
            > Create a trip </button>
            </form>
            <form onSubmit={this.routeSearch}>
              
              <div id="or">OR</div>

            <input
              className="input-field"
              value={this.props.tripId}
              type="tripId"
              onChange={this.handleSearch}
              placeholder="Trip ID"
              required
            />
            <button
              id="submit-button"
              className="btn btn-warning"
              block
              type="submit"
              value="Join an existing trip"
            > Join a trip </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TripId
