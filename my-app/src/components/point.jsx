/* global google */
import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";

class Point extends Component {
    
    render() {
      console.log(this.props)
        return (
            <Marker name={this.props.name}
            position={new google.maps.LatLng(this.props.lat, this.props.long)}
            >

            </Marker>
        )
    }

}

export default Point;
