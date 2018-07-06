function isFetching(state = false, action) {
  switch (action.type) {
    case 'IS_FETCHING':
      return true;
    case 'IS_FETCHING_SUCCESS':
      return false;
    default:
      return state;
  }
}

export default isFetching;