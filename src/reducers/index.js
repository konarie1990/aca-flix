import { combineReducers } from "redux";

const myMovieList = (state = [], action) => {
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return action.value;
  }
  return state;
};

const searchResults = (state = [], action) => {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
};

export default combineReducers({
  myMovieList,
  searchResults
});

// Trouble shooting commented out export default rootReducer
// export default rootReducer;

// * In reducers/index.js
// * Create reducers functions for all state
// * Parameters - state, action
// * Remember default value
// * Import combineReducers from redux
// * Combine reducers and export
// *******
// look for the action
// "MY_MOVIE_LIST LOADED"
// return the value

// look for the action
// "SEARCH_RESULTS_LOADED"
// return the value
