import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
// BrowserRouter interacts with the browser history and decides what to do
// Route determines what is shown when a certain url is requested

import PostIndex from './components/post_index'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
