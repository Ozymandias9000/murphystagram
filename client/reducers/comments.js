function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT_SUCCESS":
      return [
        ...state, {
          user: action.author,
          text: action.comment,
          commentId: action.commentId
        }];
    case "ADD_COMMENT_FAILURE":
      return state;
    case "REMOVE_COMMENT_SUCCESS":
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    case "REMOVE_COMMENT_FAILURE":
      return state;
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;