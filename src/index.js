import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'; //magazyn aplikacji, czyli store.
import reducer from './reducer.js';
import { addComment } from './actions.js';

const store = createStore(reducer); //magazyn utworzony.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

store.dispatch(addComment('1st comment'));
store.dispatch(addComment('2nd comment'));
