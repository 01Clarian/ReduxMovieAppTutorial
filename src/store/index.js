import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import movielistReducer from './reducers/movielistReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

//Combine our reducers and change property names
const allReducers = combineReducers({movies: movielistReducer, users: userReducer});

//Create initial State.
const initialState = {
    users: [],
    movies: {name: "TERMINATOR 2"}
}
//Create out store and set our reducers, state, and middleware.
const store = createStore(allReducers, initialState, compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;