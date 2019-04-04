import React, {
  Component
} from 'react';
import './App.css';
import MyMapComponent from './components/MyMapComponent.jsx';
import NavBar from './components/NavBar';
import TripId from './components/TripId';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isLoggedIn: false
    }
        this.handleState = this.handleState.bind(this);
  }
  handleState() {
    this.setState({isLoggedIn: true})
  }
  addWaypoint =(waypoint)=>{
    const waypoints = this.state.waypoints
    waypoints.push(waypoint)
    this.setState({ waypoints })
  }

  render() {
    if(!this.state.isLoggedIn) {
      return ( <TripId update={this.handleState}/>)
    } else {
    return (
      <div className="App">
        <NavBar/>
        <div className="main-container">
          <MyMapComponent
            waypoints={this.state.waypoints}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
            containerElement={<div className="mapContainer"/>}
            loadingElement={<div className="loadingElement"/>}
            mapElement={<div className="mapElement" id="map"/>}
          />
          <ToDoList />
        </div>

        <Footer/>
      </div>
    );
    }
 
  }
}

export default App;