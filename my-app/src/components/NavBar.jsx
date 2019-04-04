import React, { Component } from 'react';
import '../App.css'
<<<<<<< HEAD
=======
const uuidv4 = require('uuid/v4');
>>>>>>> 4744949c4a03abfa744bb7cf2d85bc11fd2a589a

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: []
    };
  }

  
  render() {
    console.log(uuidv4(44))
    return (
      <header className="nav-bar">
        <img id="nav-logo" src="https://github.com/ryaaanandrew/final_project/blob/master/logo_transparent.png?raw=true" alt="logo" />
        <h1>NAV-BAR HEADER</h1>
      </header >
    )
  }
}

export default NavBar




  