import React, {
  Component
} from 'react';
import './App.css';
import MyMapComponent from './components/MyMapComponent.jsx';
import NavBar from './components/NavBar';
<<<<<<< HEAD
import TripId from './components/TripId';
=======
>>>>>>> mailer
import ToDoList from './components/ToDoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  addWaypoint =(waypoint)=>{
    const waypoints = this.state.waypoints
    waypoints.push(waypoint)
    this.setState({ waypoints })
  }

  render() {
<<<<<<< HEAD
    return (
      <div className="App">
        <NavBar/>
        {/* <TripId/> */}
        <MyMapComponent
          waypoints={this.state.waypoints}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
          containerElement={<div className="mapContainer"/>}
          loadingElement={<div className="loadingElement"/>}
          mapElement={<div className="mapElement" id="map"/>}
        />
        <ToDoList />

      </div>
=======
    return ( <
      div className = "App" >
      <
      NavBar / >
      <
      MyMapComponent waypoints = {
        this.state.waypoints
      }
      googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
      containerElement = {
        < div className = "mapContainer" / >
      }
      loadingElement = {
        < div className = "loadingElement" / >
      }
      mapElement = {
        < div className = "mapElement"
        id = "map" / >
      }
      /> <
      ToDoList / >

      <
      /div>
>>>>>>> mailer
    );
  }
}

export default App;