import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'babel-polyfill';

const logger = createLogger();

import rootReducer from './reducers/index';

import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
  posts,
  comments
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk, logger)));

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)

  })
}

export default store;