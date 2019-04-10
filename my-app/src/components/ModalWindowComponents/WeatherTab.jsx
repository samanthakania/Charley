import React, { Component } from 'react';
import './ModalWindowComponents.css';
import DarkSkyApi from 'dark-sky-api'
DarkSkyApi.apiKey = '379b67815f86fa3fb81b23bff3f6db3a'


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
            <h1>Weather Information</h1>
            <h2>{this.props.park.full_name}'s Current temp: {this.props.weather.currently.apparentTemperature}°F</h2>
            <h4>Weather Summary: {this.props.weather.currently.summary}</h4>
            <h4>High of: {this.props.weather.daily.data[0].temperatureHigh}°F</h4>
            <h4>Low of: {this.props.weather.daily.data[0].temperatureLow}°F</h4>
            <h4>Wind Speed: {this.props.weather.daily.data[0].windSpeed} mp/h</h4>
            <h4>Wind Gust: {this.props.weather.daily.data[0].windGust} mp/h</h4>
        </div>
        );
    }
}

export default WeatherTab;