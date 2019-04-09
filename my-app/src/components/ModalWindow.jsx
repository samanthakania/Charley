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
        minHeight: '70%',
        borderRadius: '7px',
        backgroundColor: 'rgba(24, 24, 24, 0.9)',
        boxShadow: 		'0px 11px 19px -1px rgba(0,0,0,0.54)',
        border: '1px solid black'
    },

    overlay : {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
    }
  };

class ModalWindow extends Component {
    constructor() {
        super()
        this.state = {
            showModal: true,
            waypoints: [],
            weather: []
        };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleWaypoint = this.handleWaypoint.bind(this);
    this.handleRemoveWaypoint = this.handleRemoveWaypoint.bind(this)
    this.fetchWeather = this.fetchWeather.bind(this)
    }
    componentDidMount() {
        ReactModal.setAppElement('body')
        console.log("hts", this.props.park.lat)
        console.log("hts", this.props.park)
        this.fetchWeather()
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    fetchWeather() {
        fetch(proxyURL + `https://api.darksky.net/forecast/379b67815f86fa3fb81b23bff3f6db3a/${this.props.park.lat},${this.props.park.long}`)
        .then(response => {
            if (response.ok) {
              response.json().then(data => {
                this.setState({ weather: data })
                console.log('weather', this.state.weather)
              })
    
            }
          })
        .catch(err => console.log('parsing failed', err))
    }  

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    handleWaypoint() {
        this.props.save(this.props.park.id)
        this.props.addWaypoint({
            location: new google.maps.LatLng(this.props.park.lat,
                 this.props.park.long),
            stopover: true
        })
    }

    handleRemoveWaypoint(){
        this.props.removeWaypoint()
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
                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={true}
                >  
                    <Tabs>
                        <TabList>
                            <Tab>Social Media</Tab>
                            <Tab>Park Description</Tab>
                            <Tab>Weather</Tab>
                            <Tab>Park Advisories</Tab>
                        </TabList>

                        <TabPanel>
                            <SocialMediaTab 
                                parkInfo={this.props.park}
                                handleWaypoint={ this.handleWaypoint }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ParkDescriptionTab parkDes={this.props.park}
                            />
                        </TabPanel>
                        <TabPanel>
                            <WeatherTab 
                                weather={this.state.weather} 
                                park={ this.props.park }/>
                        </TabPanel>
                        <TabPanel>
                            <ParkAdvisoriesTab />
                        </TabPanel>

                    </Tabs>
                    <div className="modal-buttons-container">
                        <div onClick={this.handleRemoveWaypoint} className="modal-window-button">Remove from Route</div>
                        <div onClick={this.handleCloseModal} className="modal-window-button">Close Modal</div>
                    </div>
                </ReactModal>
            </div>
        )
    }


}

export default ModalWindow;