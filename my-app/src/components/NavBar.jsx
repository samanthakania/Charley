import React, { Component } from 'react';
import '../App.css'

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
      <h1 id="nav-header">LETS PLAN A TRIP...</h1>
    </header>
     
    )
  }
}

export default NavBar 
