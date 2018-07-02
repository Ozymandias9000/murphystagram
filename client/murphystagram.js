import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './components/Main'
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import css from './styles/style.styl';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));