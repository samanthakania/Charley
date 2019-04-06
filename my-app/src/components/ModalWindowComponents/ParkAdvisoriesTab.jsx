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
        console.log('park advis')
        return (
                <div className="tabs-content-container">
                    <i class="fas fa-comment-dots fa-4x"></i>
                    <h1>Tab Header</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci illo similique vero! Commodi, laboriosam iste numquam nostrum eum temporibus neque tempora? Eligendi tempore inventore sed laboriosam accusamus? Sequi, eaque.</p>
                </div>
        )
    }
}

export default ParkAdvisoriesTab;