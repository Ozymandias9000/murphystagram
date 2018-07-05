import { database } from '../config/firebase'
import { browserHistory } from 'react-router';
const shortid = require('shortid');

export function increment(index, postId) {
  return (dispatch) => {
    const postRef = database.ref(`posts/${postId}/likes`);
    postRef.transaction((likes) => {
      return (likes || 0) + 1;
    }, err => {
      if (err) dispatch(incrementFailure(err));
      else {
        dispatch(incrementSuccess(index));
      }
    })
  }
}

export function incrementSuccess(index) {
  return {
    type: 'INCREMENT_LIKES_SUCCESS',
    index
  }
}

export function incrementFailure(err) {
  return {
    type: 'INCREMENT_LIKES_FAILURE',
    err
  }
}

export function addPost(display_src, caption) {
  const postId = shortid.generate();
  return dispatch => {
    const postRef = database.ref(`posts/${postId}/`);
    postRef.set({
      display_src,
      caption,
      likes: 0
    }, err => {
      if (err) dispatch(addPostFailure(err));
      else {
        dispatch(addPostSuccess(postId, display_src, caption));
        browserHistory.push(`/view/${postId}`)
      }
    })
  }
}

export function addPostSuccess(postId, display_src, caption) {
  return {
    type: 'ADD_POST_SUCCESS',
    postId,
    display_src,
    caption
  }
}

export function addPostFailure(err) {
  return {
    type: 'ADD_POST_FAILURE',
    err
  }
}

export function addComment(postId, author, comment) {
  const commentId = shortid.generate();
  return dispatch => {
    const postRef = database.ref(`posts/${postId}/comments/${commentId}`);
    postRef.set({
      author, comment
    }, err => {
      if (err) dispatch(addCommentFailure(err));
      else {
        dispatch(addCommentSuccess(postId, author, comment, commentId))
      }
    });
  }
}

export function addCommentSuccess(postId, author, comment, commentId) {
  return {
    type: 'ADD_COMMENT_SUCCESS',
    postId,
    author,
    comment,
    commentId
  }
}

export function addCommentFailure(err) {
  return {
    type: 'ADD_COMMENT_FAILURE',
    err
  }
}

export function removeComment(postId, i, commentId) {
  return dispatch => {
    const postRef = database.ref(`posts/${postId}/comments/${commentId}`);
    postRef.set({
      author: null,
      comment: null
    }, err => {
      if (err) dispatch(removeCommentFailure(err));
      else {
        dispatch(removeCommentSuccess(postId, i))
      }
    });
  }
}

export function removeCommentSuccess(postId, i) {
  return {
    type: 'REMOVE_COMMENT_SUCCESS',
    i,
    postId
  }
}

export function removeCommentFailure(err) {
  return {
    type: 'REMOVE_COMMENT_FAILURE',
    err
  }
}

export function fetchPosts() {
  return async dispatch => {
    dispatch(fetchPostsStart());
    try {
      const postsRef = database.ref('posts');
      const db = await postsRef.once('value');
      const snapshot = db.val();
      const data = [];
      for (let post in snapshot) {
        const obj = { code: post, ...snapshot[post] };
        data.push(obj);
      }
      return dispatch(fetchPostsSuccess(data));
    } catch (err) {
      return dispatch(fetchPostsFailure(err));
    }
  }
}

export function fetchPostsStart() {
  return {
    type: 'FETCH_POSTS_START'
  }
}

export function fetchPostsSuccess(data) {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    data
  }
}

export function fetchPostsFailure(err) {
  return {
    type: 'FETCH_POSTS_FAILURE',
    err
  }
}