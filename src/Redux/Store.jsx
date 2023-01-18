// store
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./Reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;

/* import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from './Reducer';

const store= createStore(//con esta función hago la subscripción
    rootReducer,//aquí ocurre la magia, de donde podre acceder a cada estado
    composeWithDevTools(applyMiddleware(thunk)));//me permite usar una extención jeje y el thuk es para el async

export default store;   

//no pude hacerlo con el configureStore :( */