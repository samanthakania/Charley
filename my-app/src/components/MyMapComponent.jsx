/* global google */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import '../App.css';
import ModalWindow from './ModalWindow.jsx';
import InputWindow from './InputWindow.jsx';

class MyMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedIn: true,
      directions: null,
      parks: [],
      modal: false,
      currentPark: null,
      waypoints: [],
      savedParks: [],
    }
    this.originInput = React.createRef();
    this.destinationInput = React.createRef();
    this.mapElt = React.createRef();
    this.origin = null
    this.destination = null
    // this.handleSave = this.handleSave.bind(this);
  }
  
  componentWillMount(){
    
  }
  componentDidMount() {
    console.log("input", this.originInput.current)
    this.fetchData();
    
    this.directionsService = new google.maps.DirectionsService();
    console.log("pleace", this.originInput.current)
    let originAutocomplete = new google.maps.places.Autocomplete(this.originInput.current);
    let destinationAutocomplete = new google.maps.places.Autocomplete(this.destinationInput.current);
    this.returningRoute();  
    
    originAutocomplete.setFields(['place_id']);
    destinationAutocomplete.setFields(['place_id']);
    this.placeChanged(originAutocomplete, 'ORIG')
    this.placeChanged(destinationAutocomplete, 'DEST');

    this.map = this.mapElt.current.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
    this.map.disableDefaultUI = true;
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.originInput.current);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.destinationInput.current);

    // if trip ID exists:
    // - make AJAX request to get trip data
    // - update the state with trip waypoints, origin, and destination
    // - then call this.route() to update the map
  }
  handlePlaceIdOri = (e) => {
    this.setState({ o: e.current})
    console.log(this.state.o)
  }
  handlePlaceIdDes = (e) => {
    this.setState({ d: e.currentTarget.value })
    console.log(this.state.d)
  }
  placeChanged(autocomplete, mode) {
    var me = this;
    autocomplete.addListener('place_changed', function () {
      var place = autocomplete.getPlace();

      if (!place.place_id) {
        window.alert('');
        return;
      }
      if (mode === 'ORIG') {
        me.origin = place.place_id;
        console.log(place)
      } else {
        me.destination = place.place_id;
      }
      me.route();   
    });
  }

  route() {
    console.log('route')
    if (!this.origin || !this.destination) {

      return;
    }

    console.log('route 2 hit')

    var me = this;
    this.directionsService.route(
      {
        origin: { 'placeId': this.origin },
        destination: { 'placeId': this.destination },
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: this.state.waypoints,
        optimizeWaypoints: true,
      },
      function (response, status) {
        if (status === 'OK') {
          console.log('hit if')
          me.setState({
            directions: response,
          });
        } else {
          window.alert('Oh no! It looks like our map cannot generate a route to this park. Please choose another.');
          me.removeLastWaypoint();
        }
      });
  }
  returningRoute() {
    if (this.props.foundRoute === null) {
      console.log("null hit");
    } else {

      this.origin = this.props.foundRoute[0]
      this.destination = this.props.foundRoute[1]
    let latsandlongs = this.props.foundRoute[3]
    latsandlongs.forEach((latandlong) => {
      this.addWaypoint({
          location: new google.maps.LatLng(latandlong.lat, latandlong.long),
          stopover: true
        })
    })  
    this.route()
      
    }
  }
     removeLastWaypoint =(waypoint)=>{
      const waypoints = this.state.waypoints
      waypoints.pop()
      this.setState({ waypoints: waypoints }, () => {
        this.route();
    })
  }

  saveParkName = (name) => {
    const saved = this.state.savedParks
    saved.push(name)
    this.setState({ 
      savedParks: saved
    })
  
  }
  fetchData() {
    fetch('/parks/index')
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.setState({ parks: data })
          })

        }
      })
      .catch(err => console.log('parsing failed', err))

  }
  handleModal(park) {
    this.setState({ modal: false, currentPark: park });
    console.log(park);

    this.setState({ modal: true });

  }
  addWaypoint = (waypoint) => {
    const waypoints = this.state.waypoints
    waypoints.push(waypoint)
    this.setState({ waypoints: waypoints }, () => {
      this.route();
    })
  }

  removeWaypoint = (waypoint) => {
    const waypoints = this.state.waypoints
    waypoints.pop(waypoint)
    this.setState({ waypoints: waypoints }, () => {
      this.route();
    })
  }

  handleSave = (event) => {
    event.preventDefault();
     window.fetch('/users/save_route', {
      method: 'POST',
      body: JSON.stringify({
          tripId: this.props.id,
          origin: this.origin,
          destination: this.destination,
          waypoints: this.state.savedParks
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(async resp => await resp.json())
        .then((json) => {

          console.log(json)


        })
        .catch(err => console.log(err))

    
  } 
  render() {
      console.log("saviing", this.state.savedParks)
    return (
        <div>
          <InputWindow 
            originInput = { this.originInput }
            destinationInput = { this.destinationInput }
          />
          <GoogleMap
            defaultOptions={{ styles: this.props.mapStyles }}
            ref={this.mapElt}
            defaultZoom={4}
            defaultCenter={{ lat: 47.9253, lng: -97.03294 }}
          >
            {this.state.parks.map(park => {
              return (<Marker className="markers" Name={park.name} position={new google.maps.LatLng(park.lat, park.long)}
                onClick={this.handleModal.bind(this, park)}
              />)
            })}
            {this.state.directions && <DirectionsRenderer directions={this.state.directions} options={ { suppressMarkers: true }} />}
          </GoogleMap> 
          {this.state.modal ? (
            <ModalWindow park={this.state.currentPark}
              addWaypoint={this.addWaypoint}
              save={this.saveParkName}
              removeWaypoint={this.removeWaypoint}
              />
        ) : (
            <h1> </h1>
          )}
        <form onSubmit={this.handleSave.bind(this)}>
      <button>Save Route</button>
     </form>
      </div>)
  }

}

MyMapComponent.defaultProps = {
  // The style is copy from https://snazzymaps.com/style/2/midnight-commander
  mapStyles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ]
}


export default withGoogleMap(MyMapComponent);

