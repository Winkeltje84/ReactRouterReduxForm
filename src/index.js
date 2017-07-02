import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// BrowserRouter interacts with the browser history and decides what to do
// Route determines what is shown when a certain url is requested
import promise from 'redux-promise'

import ShowPost from './components/post_show'
import PostIndex from './components/post_index'
import PostNew from './components/post_new'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew}/>
          <Route path="/posts/:id" component={ShowPost}/>
          // this route should be second to make sure 'new' is not seen
          // as an 'id' that is provided by the user
          <Route path="/" component={PostIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
