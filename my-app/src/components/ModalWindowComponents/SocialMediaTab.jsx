/* global google */
import React, { Component } from 'react';
import './ModalWindowComponents.css';
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
    // this.fetchTweets()
    this.fetchFlickr()
    // this.props.addWaypoint({
    //   location: new google.maps.LatLng(47.9253, -97.03294),
    //   stopover: true
    // })
    // console.log("made it here", this.state.tweets)
  }
  fetchFlickr() {
    //  console.log('flickr key', key)
    let searchWord = this.props.parkInfo.full_name;
    let flickr = config.flickr;


    let url = `https://api.flickr.com/services/rest/?api_key=${flickr}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchWord}`
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
    let name_encoded = encodeURIComponent(this.props.parkInfo.name)

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
    return (
      <div className="hero-image">
        <div className="hero-text">
          <h1>Fake National Park</h1>
          <p>Come for the nature, stay because you got lost!</p>
          <button onClick={this.props.handleWaypoint} id="add-button">Add</button>
        </div>
      </div>
    )
  }
}

export default SocialMediaTab;


// "https://api.twitter.com/1.1/search/tweets.json/?api_key=?q=LlZPzsUBTmWNVuDty4AtVUSwu%23yellowstone&count=10&include_entities=true"

