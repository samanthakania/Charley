import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";



class MyMapComponent extends Component {
  render() {
    return(
      <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
    )
  }
}

export default withGoogleMap(MyMapComponent);