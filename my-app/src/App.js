/* global google */
import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './components/MyMapComponent.jsx';
import NavBar from './components/NavBar';
import ModalWindow from './components/ModalWindow';
import TripId from './components/TripId'

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        waypoints: []
      }
    }

  addWaypoint =(waypoint)=>{
    const waypoints = this.state.waypoints
    waypoints.push(waypoint)
    this.setState({ waypoints })
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <TripId/>
        <MyMapComponent
          waypoints={this.state.waypoints}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
          containerElement={<div className="mapContainer"/>}
          loadingElement={<div className="loadingElement"/>}
          mapElement={<div className="mapElement" id="map"/>}
        />
        < ModalWindow
          addWaypoint={this.addWaypoint}
          />
      </div>
    );
  }
}

export default App;
