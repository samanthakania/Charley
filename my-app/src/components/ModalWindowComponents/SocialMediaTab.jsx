import React, { Component } from 'react';
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
  }

  fetchFlickr() {
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
              raw.forEach(photo => {
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
          response.json().then(async data => {
            let op = await data
            this.setState({ tweets: op })
             console.log(op)
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
    let heroImageStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.397), rgba(0, 0, 0, 0.5)), url(${imgSrc})`
    } 
    return (
      <div>
        <div className="hero-image" style={heroImageStyle} >
       <div className="hero-text">
            <img src={this.state.photos[this.state.indexValue]} alt="flicker"></img>
         <div id="park-name">{this.props.parkInfo.full_name}</div>
         <div onClick={this.props.handleWaypoint} className="" id="add-button">Add Park</div>
         </div>
        
       </div>
       <div className='tweets-container'>
          <h4>See what others are saying about {this.props.parkInfo.full_name}</h4>
          {this.state.tweets.map(tweet => {
            return (
                  <div className='tweets'>
                      <i class='fas fa-pizza-slice'></i>
                      <div className='userName'>{tweet.user.screen_name}</div>
                      <p className='tweet'>{tweet.text}</p>
                    </div>
                    )
            })}
        </div>
            </div> 

   )
 
}
}

export default SocialMediaTab;