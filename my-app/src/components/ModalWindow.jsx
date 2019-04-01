import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SocialMediaTab from './ModalWindowComponents/SocialMediaTab';
import ParkDescriptionTab from './ModalWindowComponents/ParkDescriptionTab';
import WeatherTab from './ModalWindowComponents/WeatherTab';
import ParkAdvisoriesTab from './ModalWindowComponents/ParkAdvisoriesTab';


class ModalWindow extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            parks: []
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

    componentDidMount(){
        console.log('component mounted')
        fetch('/parks/index')
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.setState({ parks: data })
            })
  
          }
        })
        .catch(err => console.log('parsing failed', err))
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
                            <SocialMediaTab parks = {this.state.parks} />
                        </TabPanel>
                        <TabPanel>
                            <ParkDescriptionTab parks = {this.state.parks} />
                        </TabPanel>
                        <TabPanel>
                            <WeatherTab/>
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