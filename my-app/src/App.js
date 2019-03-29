import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './components/MyMapComponent.jsx';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
          containerElement={<div className="mapContainer"/>}
          loadingElement={<div className="loadingElement"/>}
          mapElement={<div className="mapElement"/>}
        />
      </div>
    );
  }
}

export default App;
