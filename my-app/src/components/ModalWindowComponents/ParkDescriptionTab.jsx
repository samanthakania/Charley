import config from './config.js';
import React, { Component } from 'react';
import './ModalWindowComponents.css';
var unirest = require('unirest');

function loadingTimer() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  })
}
class ParkDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      camping: []
    }
  }
  componentWillMount() {
    this.fetchCamping()
    // this.fetchStats()
  }
  fetchCamping() {
    let data = []
    let lat = this.props.parkDes.lat
    let long = this.props.parkDes.long
    let key = config.trails;
    unirest.get("https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&lat=" + lat + "&lon=" + long + "&radius=25&limit=25")
      .header("X-RapidAPI-Key", key)
      .end((result) => {
        data = result.body
        this.setState({
          camping: data.places
        });

      })




  }

  fetchStats() {
    fetch('/api/nps_api_show')
      .then(response => {
        if (response.ok) {
          response.json()
            .then(data => {
              console.log(data)
            })
        }
      })

  }

  render() {
    let park = this.props.parkDes
  

    return (
      <div className="tabs-content-container">
        <header>
          <i class="fas fa-map-marked-alt fa-4x"></i>
          <h1>{park.full_name}</h1>
        </header>
        <div>
          {park.description}
        </div>

        {/* { this.state.camping.map(camp => {

          return (
            <span className="campSpot" key={camp.unique_id}>
              <h3>{camp.city}, {camp.state}</h3>
              <p>{camp.directions}</p>
            </span>)
        })} */}

      </div>

    )
  }

}

export default ParkDescription; 