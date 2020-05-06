// import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import universalReducer from './universalReducer';
// import ProductsReducer from './ProductsReducer';
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let redusers = combineReducers({
    user: userReducer,
    admin: adminReducer,
    universal: universalReducer,
    form: formReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;
// console.log(store.getState());
// console.log(store);яя

export default store;