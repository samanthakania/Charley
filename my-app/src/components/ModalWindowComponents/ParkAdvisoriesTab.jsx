import React, { Component } from 'react';
import './ModalWindowComponents.css';

class ParkAdvisoriesTab extends Component {
    componentDidMount() {
        console.log('parkadvis mounting')
        this.fetchStats()
    }
    fetchStats() {
        fetch('/api/nps_api_show')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            console.log(data.body)
                        })
                }
            })

    }
    render() {
        console.log('park advis', this.props.alerts)
       if(this.props.alerts === undefined) {

           return (
               <div className="tabs-content-container">
                    <i class="fas fa-comment-dots fa-4x"></i>
                    <h1>{this.props.park.full_name}</h1>
                    <p>There Are no Alerts for: {this.props.park.name}.</p>
                </div>
        )
    } else {
        return (
            <div className="tabs-content-container">
                <i class="fas fa-comment-dots fa-4x"></i>
            <h1>{this.props.park.full_name}</h1>
            {this.props.alerts.map((alert) => {
               
               return (
                <div> 
                <h1>Type: {alert.title}</h1>
                <h3>Severity: {alert.severity}</h3>
               <h4>description:</h4>
                <span> {alert.description}</span> 
                <h4>Regions:</h4>
                <span> {alert.regions}</span>
                </div>
               )
            })}
            </div>
        )
    }
    }
}

export default ParkAdvisoriesTab;