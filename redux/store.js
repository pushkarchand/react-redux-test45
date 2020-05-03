import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootreducer from './rootReducer';

const store=createStore(rootreducer,applyMiddleware(logger));
export default store;