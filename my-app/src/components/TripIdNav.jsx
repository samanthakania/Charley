import React, { Component } from 'react';
import '../App.css'
const uuidv4 = require('uuid/v4');

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: []
    };
  }
  render() {
    
    return (
    <header id="tripid-nav-bar">
      <h1 id="tripid-nav-header">CHARLEY.</h1>
    </header>
     
    )
  }
}

export default NavBar 
