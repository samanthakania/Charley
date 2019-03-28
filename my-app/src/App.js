import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <header className="App-header">
      <h1>hit hit</h1>
      
        </header>
      </div>
    );
  }
}

export default App;
