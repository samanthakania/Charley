import React, { Component } from 'react';

class SearchRoute extends Component {
  render() {
    return(
      <div>
        <input id="origin-input" class="controls" type="text" placeholder="Enter a start location"/>
        <input id="destination-input" class="controls" type="text" placeholder="Enter an end location"/>
      </div>
      )
  }
}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADfvn7bqN8wTxIrPUpCZZMEoURzEsj5sU&libraries=places&callback=initMap"
  async defer></script>

export default SearchRoute;
