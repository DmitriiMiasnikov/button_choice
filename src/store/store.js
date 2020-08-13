import { combineReducers, createStore, applyMiddleware } from 'redux';
import buttonsReducer from './buttonsReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    buttons: buttonsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;