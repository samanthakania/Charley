/* global google */
import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import './MyMapComponent.css';

class MyMapComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      directions: null,
    }
  }

  componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(43.6532, -79.3832),
        destination: new google.maps.LatLng(37.7749, -122.4194),
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