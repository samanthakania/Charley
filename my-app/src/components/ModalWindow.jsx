import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SocialMediaTab from './ModalWindowComponents/SocialMediaTab';
import ParkDescriptionTab from './ModalWindowComponents/ParkDescriptionTab';
import WeatherTab from './ModalWindowComponents/WeatherTab';
import ParkAdvisoriesTab from './ModalWindowComponents/ParkAdvisoriesTab';


class ModalWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: true
        };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    
    }
    componentDidMount() {
        ReactModal.setAppElement('body')
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return( 
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
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
                            <SocialMediaTab/>
                        </TabPanel>
                        <TabPanel>
                            <ParkDescriptionTab/>
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