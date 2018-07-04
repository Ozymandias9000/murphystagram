import { database } from '../config/firebase'

export function increment(index, postId) {
  return (dispatch) => {
    const postRef = database.ref(`posts/${postId}/likes`);
    postRef.transaction((likes) => {
      return (likes || 0) + 1;
    }, err => {
      if (err) console.log(err);
      else {
        dispatch(incrementSuccess(index, postId));
      }
    })
  }
}

export function incrementSuccess(index, postId) {
  return {
    type: 'INCREMENT_LIKES_SUCCESS',
    index
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