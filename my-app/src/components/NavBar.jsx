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
    <header className="nav-bar">
      <img id="nav-logo" src="https://github.com/ryaaanandrew/final_project/blob/f470b1c59b2e2e1d1706c4ecb64aa84d3ea9d482/logo_transparent.png?raw=true" alt="logo" />
    </header>
     
    )
  }
}

export default NavBar 
