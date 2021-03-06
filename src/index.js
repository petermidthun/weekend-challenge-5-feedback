import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const feelingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK_FEELING') {
        state = [...state, parseInt(action.payload.feeling)];
    }
    else if (action.type === 'RESET_STATE') {
        state = [];
    }
    else {
        console.log('feelingReducer called, no action taken');
    }
    return state
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK_UNDERSTANDING') {
        state = [...state, parseInt(action.payload.understanding)];
    }
    else if (action.type === 'RESET_STATE') {
        state = [];
    }else {
        console.log('understandingReducer called, no action taken');
    }
    return state
}

const supportReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK_SUPPORT') {
        state = [...state, parseInt(action.payload.support)];
    }
    else if (action.type === 'RESET_STATE') {
        state = [];
    }else {
        console.log('supportReducer called, no action taken');
    }
    return state
}

const adminReducer = (state=[], action) => {
    console.log('In admin reducer...');
   
    if (action.type === 'SET_FEEDBACK_FROM_DATABASE') {
      state= action.payload;
    } 
    else if (action.type === 'DELETE_FEEDBACK'){
        const matchFeedback = feedback => feedback.id !== action.payload;
        state = state.filter(matchFeedback);
    }
    return state;
  }


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        adminReducer
    }),
    applyMiddleware(logger) 
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
