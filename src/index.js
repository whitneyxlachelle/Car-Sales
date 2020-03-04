import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import  { createStore } from 'redux';
import { Provider } from 'react-redux';
import { featureReducer } from './reducers/featureReducer';

//createStore will take in a single reducer that represents the state of the application globally
const store = createStore(featureReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 rootElement
 );
