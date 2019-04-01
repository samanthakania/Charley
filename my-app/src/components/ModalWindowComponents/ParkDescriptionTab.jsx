import React, { Component } from 'react';

class ParkDescription extends Component {
    render() {
        return(
            <div className="ParkDescriptionContainer">
                <header>
                    <h1>Park Description</h1>
                </header>
                <div>
                    <h3>{this.props.parks[0].description}</h3>
                    <a href='#'>{this.props.parks[0].url}</a>
                </div>
            </div>
        )
    }
}

export default ParkDescription;