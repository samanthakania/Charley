import React, { Component } from 'react';
import './ModalWindowComponents.css';
// import DarkSkyApi from 'dark-sky-api'
// DarkSkyApi.apiKey = '379b67815f86fa3fb81b23bff3f6db3a'


class WeatherTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
        let park = this.props.weather
        return(
            <div className="tabs-content-container">
            <i class="fas fa-poo-storm fa-4x"></i>
            <h1>Weather</h1>
            <div>
             {park.weather_info}
            </div>
        </div>
        );
    }
}

export default WeatherTab;