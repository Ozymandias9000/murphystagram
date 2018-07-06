import React, { Component } from 'react';


class AddPost extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const display_src = this.refs.display_src.value;
    const caption = this.refs.caption.value;
    this.props.addPost(display_src, caption);
    this.refs.imgForm.reset();
  }

  render() {
    return (
      <div className='single-photo add-post'>
        <form ref='imgForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='display_src' placeholder='Image URL' />
          <input type='text' ref='caption' placeholder='Caption' />
          <input type='submit' hidden />
        </form>
      </div >
    )
  }
}

export default AddPost;