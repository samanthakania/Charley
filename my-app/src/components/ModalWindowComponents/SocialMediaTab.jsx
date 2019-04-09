/* global google */
import React, { Component } from 'react';
// import './ModalWindowComponents.css';
import config from './config.js'

class SocialMediaTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      tweets: [],
      indexValue: 0

    };
  }
  componentDidMount() {
    this.fetchTweets()
    // this.fetchFlickr()
  }
  fetchFlickr() {
    //  console.log('flickr key', key)
    let searchWord = this.props.parkInfo.name;
    let flickr = config.flickr;
    console.log("flickr", flickr)

    let url = `https://api.flickr.com/services/rest/?api_key=${flickr}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=53&page=1&lat=${this.props.parkInfo.lat}&long=${this.props.parkInfo.long}&in_gallery=true&text=${searchWord}`
    fetch(url)
      .then(response => {
        if (response.ok) {
          response.json()
            .then(data => {
              let raw = data.photos.photo
              let output = []
              raw.map(photo => {
                let src = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'
                output.push(src)
              })
              
              this.setState({ photos: output })
            })
        }
      })

      .catch(err => console.log('parsing failed', err))
  }



  fetchTweets() {
    let name_encoded = encodeURIComponent(this.props.parkInfo.twitter)

    fetch('/twitterfeed/index?name=' + name_encoded)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            let op = data
            this.setState({ tweets: op })
            //  console.log(op)
          })
        }
      })
      .catch(err => console.log('parsing failed', err))


  }

  nextPhoto = () => {
    let prev = this.state.indexValue
    this.setState({ indexValue: prev + 1 })

  }
  backPhoto = () => {
    let prev = this.state.indexValue
    this.setState({ indexValue: prev - 1 })
  }

  render() { 
    console.log(this.state.photos)
    let imgSrc = require(`../../${this.props.parkInfo.photo}`)
    // let imgSrc = require('../../photos/yoho.jpg')
    let heroImageStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.397), rgba(0, 0, 0, 0.5)), url(${imgSrc})`
    }
    return (
      <div>
      <div className="hero-image" style={heroImageStyle}>
       <div className="hero-text">
         {/* <img src={this.state.photos[this.state.indexValue]}></img> */}
         <div id="park-name">{this.props.parkInfo.full_name}</div>
         <div onClick={this.props.handleWaypoint} className="" id="add-button">Add Park</div>
         </div>
         {/* {this.state.indexValue === 0 ? (<p></p>) : (<button onClick={this.backPhoto}>back</button>)} */}
       </div>
      {this.state.tweets.map(tweet => {
        
        return (<span>
                <h3>{tweet.user.screen_name}</h3>
                <p>{tweet.text}</p>
              </span>)
            })}
            </div> 

   )
 
}
}

export default SocialMediaTab;


// "https://api.twitter.com/1.1/search/tweets.json/?api_key=?q=LlZPzsUBTmWNVuDty4AtVUSwu%23yellowstone&count=10&include_entities=true"


      // <div className="social-media-container">
      //   <span className="likes"> 2,000 likes</span>
      //   <div className="hero-image">
      //     <div className="hero-text">
      //       <img src={this.state.photos[this.state.indexValue]}></img>
      //     </div>
      //     {this.state.indexValue === 0 ? (<p></p>) : (<button onClick={this.backPhoto}>back</button>)}
      //   </div>

      //     <button onClick={this.nextPhoto}>next</button>
      //   <div className="social-media-content">
      //     <div className="comments">

      //       {this.state.tweets.map(tweet => {

      //         return (<span className="tweets">
      //           <h3>{tweet.user.screen_name}</h3>
      //           <p>{tweet.text}</p>
      //         </span>)
      //       })}

      //       <div><h1>hit</h1></div>
      //     </div>
      //   </div>
      // </div>