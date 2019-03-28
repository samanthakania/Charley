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
          containerElement={<div style={{ height: `600px` }} />} 
          mapElement={<div style={{ height: `100%` }} />} />
      </div>
    );
  }
}

export default App;
