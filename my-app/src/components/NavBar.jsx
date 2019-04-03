import React, { Component } from 'react';
import '../App.css'


class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: []
    };
  }

  onChange(event) {
    console.log(event.target.value)
  }
  emailHandler(event) {
    event.preventDefault();

    window.fetch('/users/create_route', {
      method: 'POST',
      body: JSON.stringify({ email: 'kylemcloughlin1000@hotmail.ca' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then((json) => {
        console.log(json)
      })
      .catch(err => console.log(err))

  }
  render() {
    return (
    <header className="nav-bar">
      <img id="nav-logo" src="https://github.com/ryaaanandrew/final_project/blob/master/logo_transparent.png?raw=true" alt="logo" />
      <h1>NAV-BAR HEADER</h1>
    </header>
     
    )
  }
}

export default NavBar





