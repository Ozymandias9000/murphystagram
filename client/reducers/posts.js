function posts(state = [], action) {
  switch (action.type) {
    case 'FETCH_POSTS_START':
      return state;
    case 'FETCH_POSTS_SUCCESS':
      return [...action.data];
    case 'FETCH_POSTS_FAILURE':
      return state;
    case 'ADD_POST_SUCCESS':
      const { postId, display_src, caption } = action;
      return [
        ...state,
        {
          code: postId,
          likes: 0,
          display_src,
          caption
        }
      ]
    // Work out how to log errors
    case 'ADD_POST_FAILURE':
      return state;

    case 'INCREMENT_LIKES_SUCCESS':
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ]
    // Work out how to log errors
    case 'INCREMENT_LIKES_FAILURE':
      return state;
    default:
      return state;
  }
}

export default posts;