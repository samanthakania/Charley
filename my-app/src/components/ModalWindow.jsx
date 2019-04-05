/* global google */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SocialMediaTab from './ModalWindowComponents/SocialMediaTab';
import ParkDescriptionTab from './ModalWindowComponents/ParkDescriptionTab';
import WeatherTab from './ModalWindowComponents/WeatherTab';
import ParkAdvisoriesTab from './ModalWindowComponents/ParkAdvisoriesTab';
import DarkSkyApi from 'dark-sky-api';
DarkSkyApi.apiKey = '379b67815f86fa3fb81b23bff3f6db3a';
const proxyURL = 'https://cors-anywhere.herokuapp.com/'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: '70%',
        borderRadius: '7px'

    }
  };

class ModalWindow extends Component {
    constructor() {
        super()
        this.state = {
            showModal: true,
            waypoints: []
        };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleWaypoint = this.handleWaypoint.bind(this);
    }
    componentDidMount() {
        ReactModal.setAppElement('body')
        console.log("hts", this.props.park.lat)
        console.log("hts", this.props.park)
       
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }
    fetchWeather() {
        fetch(proxyURL + `https://api.darksky.net/forecast/379b67815f86fa3fb81b23bff3f6db3a/${this.state.parks[1].lat},${this.state.parks[1].long}`)
        .then(response => {
            if (response.ok) {
              response.json().then(data => {
                this.setState({ weather: data })
              })
    
            }
          })
          .catch(err => console.log('parsing failed', err))
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }
    handleWaypoint() {
        this.props.addWaypoint({
            location: new google.maps.LatLng(this.props.park.lat, this.props.park.long),
            stopover: true
        })
    }
    render() {
        console.log("Window", this.props)
        return (
            <div>
                <button onClick={this.handleOpenModal}>{this.props.park.name}</button>
                <ReactModal
                    style = { customStyles }
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    ariaHideApp={false}>
                    <Tabs>
                        <TabList>
                            <Tab>Social Media</Tab>
                            <Tab>Park Description</Tab>
                            <Tab>Weather</Tab>
                            <Tab>Park Advisories</Tab>
                        </TabList>

                        <TabPanel>
                            <SocialMediaTab 
                                parkInfo={ this.props.park }
                                handleWaypoint = { this.handleWaypoint }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ParkDescriptionTab parkDes={this.props.park}
                            />
                        </TabPanel>
                        <TabPanel>
                            <WeatherTab weather={this.props.park} />
                        </TabPanel>
                        <TabPanel>
                            <ParkAdvisoriesTab />
                        </TabPanel>

                    </Tabs>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
        )
    }


}

export default ModalWindow;