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
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;