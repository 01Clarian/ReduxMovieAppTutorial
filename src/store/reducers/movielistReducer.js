import {UPDATE_MOVIES} from '../actions/updateMovies';

// Recieve type and payload from action and return payload.
// Movies are being updated by the action of the string in our payload.

const movielistReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case UPDATE_MOVIES :
            return {name: payload}
            default :
            return state
    };
};

export default movielistReducer;
