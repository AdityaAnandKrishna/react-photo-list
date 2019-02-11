import React, { Component } from 'react';
import axios from 'axios';

class MovieList extends Component {
  state = {
    photos:[]
  }

  componentDidMount(){
    axios.get("http://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      // console.log(response.data);
      this.setState({
        photos: response.data.slice(0-10)
      })
    })
  }
  render() {
    return (
      <section>
        <div className="row"> 
        {this.state.photos.map((photo) => {
          return ( 
              <div key={photo.id} className="col s6 m3">
                <div className="card">
                  <div className="card-image">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <span className="card-title">{photo.title}</span>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>                      )
        })}
        </div>
      </section>
    )
  }
}

export default MovieList;