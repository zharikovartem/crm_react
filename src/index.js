import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';

// 8029-3025850 Дмитрий

// npx create-react-app ArtCRM
// npm install react-router-dom 
// npm install redux 
// npm install react-redux
// npm install axios
// npm install react-bootstrap bootstrap

// npm install --save styled-components prop-types

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

serviceWorker.unregister();
