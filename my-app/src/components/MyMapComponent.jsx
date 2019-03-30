/* global google */
import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import './MyMapComponent.css';
import PointsOfInterest from './PointsOfInterest';


class MyMapComponent extends Component {
  state = {
    directions: null,
    parks: []
  }

  componentDidMount() {
    this.fetchData();
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: new google.maps.LatLng(43.6532, -79.3832),
      destination: new google.maps.LatLng(41.8525800, -87.6514100),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
    
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
    // var marker = new google.maps.Marker({position: myPosition, title: 'Hi', map: map})
  }
  
  fetchData(){
    fetch('/parks/index') 
    .then(response => {
      if(response.ok) {
        response.json().then(data => {
         this.setState({ parks: data})
        })
     
    }
  }) 
    .catch(err => console.log('parsing failed', err))
    
  }


  render() {
    return (
      <GoogleMap 
        defaultZoom={14}
        defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
      
      >
      
      <Marker name={"ss"}
            position={new google.maps.LatLng(32.2090636, -110.7574974 )}
            >

            </Marker>


            {this.state.parks.map(park => {
                return (<Marker className="markers" Name={park.name} position={new google.maps.LatLng(park.lat, park.long)} icon={park.img}/>)
            })}
     <PointsOfInterest points={this.state.parks} google={this.props.google}/>
        {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MyMapComponent));