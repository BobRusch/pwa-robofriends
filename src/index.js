import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { requestRobots, searchRobots } from './reducers';

import './index.css';

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
