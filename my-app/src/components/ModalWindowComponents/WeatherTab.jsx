import React, { Component } from 'react';
import './ModalWindowComponents.css';
import DarkSkyApi from 'dark-sky-api'
DarkSkyApi.apiKey = '379b67815f86fa3fb81b23bff3f6db3a'


class WeatherTab extends Component {

    render() {
        return(
            <div className="tabs-content-container">
            <i class="fas fa-poo-storm fa-4x"></i>
            <h1>Weather Information</h1>
            <h2>{this.props.park.full_name}'s Current temp: {this.props.weather.currently.apparentTemperature}</h2>
            <h3>{this.props.weather.currently.summary}</h3>
        </div>
        );
    }
}

export default WeatherTab;