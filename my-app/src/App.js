import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyMapComponent from './components/MyMapComponent.jsx';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        < NavBar />
        < MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
          containerElement={<div style={{ height: `600px` }} />}
          loadingElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
