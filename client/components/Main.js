import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to='/'>
            Murphystagram
          </Link>
        </h1>
        <div className='add-post-container'>
          <Link to='/addPost'>
            <button>Add Post</button>
          </Link>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;