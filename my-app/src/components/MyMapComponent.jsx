/* global google */
import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";



class MyMapComponent extends Component {
  state = {
    directions: null,
  }

  componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      const directionsDisplay = new google.maps.DirectionsRenderer;

      DirectionsService.route({
        origin: new google.maps.LatLng(43.6532, -79.3832),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: [{location: 'Los Angeles', stopover: true}]
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }

  render() {
    return(
      <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
    >
    {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
  </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MyMapComponent));