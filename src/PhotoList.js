import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import PhotoDetails from './PhotoDetails';

class PhotoList extends Component {
  state = {
    photos:[],
    visiblePhotos:[]
  }

  componentDidMount(){
    axios.get("http://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      // console.log(response.data);
      this.setState({
        photos: response.data.slice(0,10),
        visiblePhotos: response.data.slice(0, 10)
      })
    })
  }

  filterPhotos= () => {
    // console.log(this.filterText.value);
    const filterPhotoList = this.state.photos.filter((photo) => {
      return photo.title.indexOf(this.filterText.value) !== -1;
    });
    // console.log(filterPhotoList);

    this.setState({
      visiblePhotos: filterPhotoList
    })
  };

  render() {
    return (
      <section>
        <div className="row">
          <input 
                type="text" 
                onChange={this.filterPhotos} 
                ref={(node) => (this.filterText = node)}
                className="col s4 m4"
          />
          <button onClick={this.filterPhotos} className="btn col s2 m2">Filter</button>
        </div>
        <div className="row"> 
        {this.state.visiblePhotos.map((photo) => {
          return ( 
              <div key={photo.id} className="col s6 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <span className="card-title">{photo.title}</span>
                  </div>
                  <div className="card-action">
                    <NavLink to={`/${photo.id}`}>This is a link</NavLink>
                  </div>
                </div>
              </div>                      
          )
        })}
        </div>
      </section>
    )
  }
}

export default PhotoList;