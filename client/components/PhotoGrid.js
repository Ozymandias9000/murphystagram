import React, { Component } from 'react';
import Photo from './Photo';
import Loading from './Loading'

class PhotoGrid extends Component {
  render() {
    const { fetchState } = this.props;
    if (fetchState) {
      return (
        <div className="loading-box">
          <Loading />
        </div>
      )
    }

    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
}

export default PhotoGrid;