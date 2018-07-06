import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import isFetching from './isFetching';

const rootReducer = combineReducers({ posts, comments, isFetching, routing: routerReducer });

export default rootReducer;