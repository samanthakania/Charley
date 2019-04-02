import React, { Component } from 'react';


class WeatherTab extends Component {

    
    render() {
        return(
            <div>
                <h1>Current temp: {this.props.weather.currently.apparentTemperature}</h1>
                <h3>{this.props.weather.currently.summary}</h3>
                <h3>Summary: {this.props.weather.daily.summary}</h3>

            </div>
        );
    }
}

export default WeatherTab;