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
    else {
        console.log('feelingReducer called, no action taken');
    }
    return state
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK_UNDERSTANDING') {
        state = [...state, parseInt(action.payload.understanding)];
    }
    else {
        console.log('understandingReducer called, no action taken');
    }
    return state
}

const supportReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK_SUPPORT') {
        state = [...state, parseInt(action.payload.support)];
    }
    else {
        console.log('supportReducer called, no action taken');
    }
    return state
}

// const commentsReducer = (state = [], action) => {
//     if (action.type === 'ADD_FEEDBACK_COMMENTS') {
//         state = [...state, action.payload.comments];
//     }
//     else {
//         console.log('commentsReducer called, no action taken');
//     }
//     return state
// }

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        //  commentsReducer
    }),
    applyMiddleware(logger) 
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
