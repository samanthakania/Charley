import React, { Component } from 'react';
import './ModalWindowComponents.css';

class SocialMediaTab extends Component {
    render() {
        console.log(this.props.parks[0])
        return(
            <div className="social-media-container">
            <div className="hero-image">
                <div className="hero-text">
                    <h1>{this.props.parks[0].full_name}</h1>
                    <h2>{this.props.parks[0].prov_state}, {this.props.parks[0].country}</h2>
                    <button>Add Park</button>
                </div>
            </div>
            <div className="social-media-content">
                <span className="likes"> 2,000 likes</span> 
                <div className="comments">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eveniet provident saepe ut minima omnis nam mollitia aperiam cumque, numquam a obcaecati earum eius autem aliquam temporibus, eos fugit perferendis.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolores non unde ratione eius modi asperiores, error dignissimos architecto? Magni deleniti amet, laboriosam totam distinctio laudantium quaerat autem fugit fuga.</p>

                </div>
            </div>
        </div>
        )
    }
}

export default SocialMediaTab;