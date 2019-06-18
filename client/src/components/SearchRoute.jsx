import React, { Component } from 'react';

class SearchRoute extends Component {
  render() {
    return (
      <div>
        <input id="origin-input" class="controls" type="text" placeholder="Enter a start location" />
        <input id="destination-input" class="controls" type="text" placeholder="Enter an end location" />
      </div>
    )
  }
}

export default SearchRoute;
