import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

import rootReducer from './reducers/index';

import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk, logger));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;