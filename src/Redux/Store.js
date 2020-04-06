import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/Combine';

const store = createStore(rootReducer , applyMiddleware(thunk));
export default store;