import React, { Component } from 'react';


class AddPost extends Component {
  render() {
    return (
      <div className='single-photo'>
        <p>Add new post:</p>
        <form className='comment-form'>
          <input type='text' ref='img_url' placeholder='Image URL' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default AddPost;