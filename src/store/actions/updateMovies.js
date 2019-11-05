
export const UPDATE_MOVIES = "UPDATE_MOVIES";

//Creating an object for our action to update the movie list.
//Setting the payload to the movie of our choice as a string.

const updateMovies = {
    type: UPDATE_MOVIES,
    payload: "THE BREAKFAST CLUB"
};

export default updateMovies;

