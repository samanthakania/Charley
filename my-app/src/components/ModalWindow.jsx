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


class ModalWindow extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            parks : [],
            weather: []
        };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
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

    fetchData() {
        fetch('/parks/index')
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.setState({ parks: data })
              return data;
            }).then( () => {
                this.fetchWeather()
            })
  
          }
        })
        .catch(err => console.log('parsing failed', err))
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return(
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
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
                                addWaypoint={this.props.addWaypoint}
                            />
                        </TabPanel>
                        <TabPanel>
                            <ParkDescriptionTab/>
                        </TabPanel>
                        <TabPanel>
                            <WeatherTab
                                weather = {this.state.weather}
                            />
                        </TabPanel>
                        <TabPanel>
                            <ParkAdvisoriesTab/>
                        </TabPanel>

                    </Tabs>

                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
        )
    }
}

export default ModalWindow;