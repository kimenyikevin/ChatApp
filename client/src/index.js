import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
)

ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
