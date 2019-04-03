import React, { Component } from 'react';

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
      <header>
        <h1>NAV-BAR HEADER</h1>
        <form onSubmit={this.emailHandler}>
          <input className="emailform" placeholder='EmailHere' onSubmit={this.onChange} />
          <button type="submit" value="Submit">email</button>
        </form>
      </header >
    )
  }
}

export default NavBar


