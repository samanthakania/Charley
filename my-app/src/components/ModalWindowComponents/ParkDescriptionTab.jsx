import React, { Component } from 'react';
var unirest = require('unirest');
class ParkDescription extends Component {
  componentDidMount(){
        this.fetchNps()
  }
  fetchCamping(){
      let lat = this.props.parkDes.lat
      let long = this.props.parkDes.long
      unirest.get("https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&lat="+ lat +"&lon="+ long +"&radius=25&limit=25")
    .header("X-RapidAPI-Key", "79776c126dmshf044a8a304bdd06p1c3f64jsnb0bccede7f84")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });

  }

  render() {
      let park = this.props.parkDes
      console.log(this.props)
      return(
            <div className="ParkDescriptionContainer">
                <header>
                    <h1>{park.full_name}</h1>
                </header>
                <div>
                    <p>{park.description}</p>
                </div>
            </div>
        )
  }
}
export default ParkDescription;