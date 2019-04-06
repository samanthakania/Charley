import React, { Component } from 'react';
import './ModalWindowComponents.css';
// import DarkSkyApi from 'dark-sky-api'
// DarkSkyApi.apiKey = '379b67815f86fa3fb81b23bff3f6db3a'


class WeatherTab extends Component {

    render() {
        return(
            <div className="tabs-content-container">
            <i class="fas fa-poo-storm fa-4x"></i>
            <h1>Tab Header</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci illo similique vero! Commodi, laboriosam iste numquam nostrum eum temporibus neque tempora? Eligendi tempore inventore sed laboriosam accusamus? Sequi, eaque.</p>
        </div>
        );
    }
}

export default WeatherTab;