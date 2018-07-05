import { database } from '../config/firebase'

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




export function addComment(postId, author, comment) {
  const postRef = database.ref(`posts/${postId}/comments`);
  postRef.push({
    author, comment
  });
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}