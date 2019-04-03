/* global google */
import React, { Component } from 'react';
import './ModalWindowComponents.css';
<<<<<<< HEAD

class SocialMediaTab extends Component {
     constructor(props) {
        super(props)
        this.state = {
          photos: [],
          tweets: [],
    };
    this.handleWaypoint = this.handleWaypoint.bind(this)
  }
componentDidMount(){
  this.fetchTweets()
  this.fetchStats()
     this.fetchFlickr()

    console.log("made it here", this.state.tweets)
}

handleWaypoint(){
      console.log('lat and longs:', this.props.parkInfo.lat, this.props.parkInfo.long)
    this.props.addWaypoint({
       location: new google.maps.LatLng(this.props.parkInfo.lat, this.props.parkInfo.long),
       stopover: true
     })
  }

fetchFlickr() {
   console.log('flickr key', key)
 let searchWord = this.props.parkInfo.full_name
  console.log("hit", searchWord)
  let key= '3c93fae0a9bc674a7a19f96368815b24'
  let url = `https://api.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchWord}`
 fetch(url)
=======
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
>>>>>>> mailer
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
<<<<<<< HEAD
  fetchTweets(){
 let name_encoded = encodeURIComponent(this.props.parkInfo.name)
=======



  fetchTweets() {
    let name_encoded = encodeURIComponent(this.props.parkInfo.name)
>>>>>>> mailer

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
<<<<<<< HEAD
  fetchStats() {
  fetch('/api/nps_api_show')
  .then(response => {
    if (response.ok) {
      response.json()
      .then(data => {
        console.log(data)
      })
    }
  })

  }

    render() {
        return(
            <div className="social-media-container">
            <div className="hero-image">
                <div className="hero-text">
                  {this.state.photos.map(photo => {

            let srcPth = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'
              return(
                  <img className="parkPics" src={srcPth}></img>
             )})}
                </div>
                {this.state.tweets.map(tweet => {

            return (<span className="tweets">
                <h3>{tweet.user.screen_name}</h3>
               <p>{tweet.text}</p>
                </span>)
          })}
            </div>
                    <button onClick={this.handleWaypoint}>Add Park</button>
            <div className="social-media-content">
                <span className="likes"> 2,000 likes</span>
                <div className="comments">



                </div>
            </div>
=======

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
      <div className="social-media-container">
        <span className="likes"> 2,000 likes</span>
        <div className="hero-image">
          <div className="hero-text">
            <img src={this.state.photos[this.state.indexValue]}></img>
          </div>
          {this.state.indexValue === 0 ? (<p></p>) : (<button onClick={this.backPhoto}>back</button>)}
          <button onClick={this.nextPhoto}>next</button>
        </div>

        <div className="social-media-content">
          <div className="comments">

            {this.state.tweets.map(tweet => {

              return (<span className="tweets">
                <h3>{tweet.user.screen_name}</h3>
                <p>{tweet.text}</p>
              </span>)
            })}


          </div>
>>>>>>> mailer
        </div>
      </div>
    )
  }
}

export default SocialMediaTab;


// "https://api.twitter.com/1.1/search/tweets.json/?api_key=?q=LlZPzsUBTmWNVuDty4AtVUSwu%23yellowstone&count=10&include_entities=true"

