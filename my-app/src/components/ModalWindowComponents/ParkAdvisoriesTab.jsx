import React, { Component } from 'react';

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
            <div className="ParkAdvisoriesContainer">
                <header>
                    <h1>Park Advisories</h1>
                </header>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur rerum omnis repudiandae natus? Excepturi corrupti laboriosam fugiat libero aspernatur. A aut eveniet voluptatum delectus perferendis, consequatur eum nam quasi!</p>
                </div>
            </div>
        )
    }
}

export default ParkAdvisoriesTab;