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
      <img id="nav-logo" src="https://github.com/ryaaanandrew/final_project/blob/f470b1c59b2e2e1d1706c4ecb64aa84d3ea9d482/logo_transparent.png?raw=true" alt="logo" />
    </header>
     
    )
  }
}

export default NavBar