import React, { Component } from 'react';
import '../App.css';

class InputWindow extends Component {
    render() {
        return(
            <div className="input-container">
                <input ref={this.props.originInput} type="text" placeholder="Enter a start location"
                style={{ position: "absolute", top: 0 }} />
                <input ref={this.props.destinationInput} type="text" placeholder="Enter an end location"
                style={{ position: "absolute", top: 0 }} />
            </div> 
            );
    }
}

export default InputWindow