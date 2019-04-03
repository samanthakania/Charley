/* global google */
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
            showModal: true,
            waypoints: []
        };
<<<<<<< HEAD
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
=======
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
>>>>>>> mailer

    }
    componentDidMount() {
        ReactModal.setAppElement('body')
<<<<<<< HEAD
=======
        console.log("hts", this.props.park.lat)
        console.log("hts", this.props.park)
        this.props.addWaypoint({
            location: new google.maps.LatLng(47.9253, -97.03294),
            stopover: true
        })
>>>>>>> mailer
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    render() {
        console.log("Window", this.props)
<<<<<<< HEAD
        return(
=======
        return (
>>>>>>> mailer
            <div>
                <button onClick={this.handleOpenModal}>{this.props.park.name}</button>
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
                            <SocialMediaTab parkInfo={this.props.park}
                            />
                        </TabPanel>
                        <TabPanel>
                            <ParkDescriptionTab parkDes={this.props.park}

<<<<<<< HEAD
                        <TabPanel>
                            <SocialMediaTab
                            addWaypoint={this.props.addWaypoint}
                            parkInfo={this.props.park}/>
                        </TabPanel>
                        <TabPanel>
                            <ParkDescriptionTab parkDes={this.props.park}/>
=======
                            />
>>>>>>> mailer
                        </TabPanel>
                        <TabPanel>
                            <WeatherTab weather={this.props.park} />
                        </TabPanel>
                        <TabPanel>
                            <ParkAdvisoriesTab />
                        </TabPanel>

                    </Tabs>
                    <button onClick={this.props.addWaypoint}>Add</button>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
        )
    }


}

export default ModalWindow;