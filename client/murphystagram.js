import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App'
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import AddPost from './components/AddPost';
import NoMatch from './components/NoMatch';
import './styles/style.styl';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid} />>>>>>
        <Route path='/view/:postId' component={Single} />
        <Route path='/addPost' component={AddPost} />
        <Route path="*" exact={true} component={NoMatch} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));