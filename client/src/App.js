import React, { Component } from "react";
import "./App.css";
import MyMapComponent from "./components/MyMapComponent.jsx";
import NavBar from "./components/NavBar";
import TripId from "./components/TripId";
import ToDoList from "./components/ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      tripId: null,
      foundRoute: null,
      listId: null,
      todos: null
    };
    this.handleSearchForRoute = this.handleSearchForRoute.bind(this);
    this.handleState = this.handleState.bind(this);
  }
  handleState(id) {
    console.log("state", this.state);
    this.setState({ isLoggedIn: true, tripId: id, listId: id });
    console.log("state", this.state);
  }
  addWaypoint = waypoint => {
    const waypoints = this.state.waypoints;
    waypoints.push(waypoint);
    this.setState({ waypoints });
  };
  handleSearchForRoute(ori, des, trip, list, latlong, todos) {
    this.setState({
      isLoggedIn: true,
      foundRoute: [ori, des, trip, latlong],
      todos: todos,
      listId: list
    });
  }

  render() {
    // if (!this.state.isLoggedIn) {
    //   return (
    //     <TripId
    //       updateId={this.handleState.bind(this)}
    //       search={this.handleSearchForRoute.bind(this)}
    //     />
    //   );
    // }
    
    return (
      <div className="App">
        <NavBar />
        <div className="main-container">
          <MyMapComponent
            waypoints={this.state.waypoints}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
            containerElement={<div className="mapContainer" />}
            loadingElement={<div className="loadingElement" />}
            mapElement={<div className="mapElement" id="map" />}
            id={this.state.tripId}
            foundRoute={this.state.foundRoute}
          />
          <ToDoList id={this.state.listId} todoListFound={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
