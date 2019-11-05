import {FETCH_USERS} from '../actions/fetchUsers';

// Recieve type and payload from action and return payload.
// Use a switch since it's more readable.

const userReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case FETCH_USERS :
            return payload
            default :
            return state
    };
};

export default userReducer;
