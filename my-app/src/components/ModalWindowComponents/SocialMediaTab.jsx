import React, { Component } from 'react';
import './ModalWindowComponents.css';
// import env from 'process-env'
let Twit = require('twit')
class SocialMediaTab extends Component {
     constructor(props) {
        super(props)
        this.state = {
          photos: [],
          tweets: []
    
    };
     }
componentDidMount(){
  // this.fetchTweets()
  // this. fetchStats()  
     this.fetchFlickr()
    console.log("made it here", this.state.tweets)
} 
fetchFlickr() {       
  // let key= '3c93fae0a9bc674a7a19f96368815b24'
 let key = process.env('FLICKR')
 console.log('flickr key', key)
 let searchWord = this.props.parkInfo.full_name
  console.log("hit", searchWord)
  let url = `https://api.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchWord}`
 fetch(url)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
          let raw = data.photos.photo
          this.setState({photos: raw })
          })
        }
      })
      .catch(err => console.log('parsing failed', err))

  }
  fetchTweets(){
 let name_encoded = encodeURIComponent(this.props.parkInfo.name)
 
    fetch('/twitterfeed/index?name=' + name_encoded)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
          let op = data
          // this.setState({tweets: op})
    // console.log("made to tweets", this.state.photos[0])
         console.log(op)
          })
        }
      })
      .catch(err => console.log('parsing failed', err))

  
  }
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
                    <button>Add Park</button>
            <div className="social-media-content">
                <span className="likes"> 2,000 likes</span> 
                <div className="comments">
                    
                    

                </div>
            </div>
        </div>
        )
    }
}

export default SocialMediaTab;





// "https://api.twitter.com/1.1/search/tweets.json/?api_key=?q=LlZPzsUBTmWNVuDty4AtVUSwu%23yellowstone&count=10&include_entities=true"

