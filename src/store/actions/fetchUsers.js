export const FETCH_USERS = "FETCH_USERS";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from req.res.io
// and returning the data to our payload. 

const fetchUsers = (dispatch) => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => dispatch({type:FETCH_USERS,payload:res.data}))
};

export default fetchUsers;