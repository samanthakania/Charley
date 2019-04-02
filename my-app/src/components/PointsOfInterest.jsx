/* global google */
import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import Point from './point'


class PointsOfInterest extends Component {


    render() {
        console.log(this.props)
        if (this.props.points.length === 0) {

            return null;
                
        } else {
            return ( 

                <div>
            


            {this.props.points.map(park => {
                return (<Point key={park.id} userName={park.name} lat={park.lat} lng={park.long} />)
            })}
    


            </div>
            
            ) 
        }
    }
}

export default PointsOfInterest;