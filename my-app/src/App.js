import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './components/MyMapComponent.jsx';
import NavBar from './components/NavBar';

class App extends Component {



  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('/parks/index')
    .then(response => {return response.json()
    })
    // .then(parsedJSON => console.log(parsedJSON.results))
    .then(data => console.log(data))
    .catch(err => console.log('parsing failed', err))

  }

  render() {
    return (
      <div className="App">
        < NavBar />
        < MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU"
          containerElement={<div className="mapContainer"/>}
          loadingElement={<div className="loadingElement"/>}
          mapElement={<div className="mapElement"/>}
        />
        <header className="App-header">
      <h1>hit hit</h1>

        </header>
      </div>
    );
  }
}

export default App;
