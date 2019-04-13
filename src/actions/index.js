import axios from "axios";
// importing axios because fetch is giving me errors

// *** removeMyMovie was ultimately the main issue - movies weren't being deleted and cause issues with the entire app - NOW WORKING!!!

export const myMovieListLoaded = movies => {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
};

export const searchLoaded = movies => {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies
  };
};

export const loadSearch = searchTerm => dispatch => {
  return {
    type: "LOAD_SEARCH",
    value: axios
      .get(
        "https://api.themoviedb.org/3/search/multi?query=" +
          searchTerm +
          "&api_key=b627c3bab35d14cf33ffdeca5e332c80"
      )
      .then(res => dispatch(searchLoaded(res.data.results)))
      .catch(err => console.log(err))
  };
};

export const loadMyMovieList = () => dispatch => {
  console.log("load my movie list");
  axios
    .get("/movies")
    .then(res => dispatch(myMovieListLoaded(res.data)))
    .catch(err => console.log("Load My Movie List ERROR", err));
};

export const saveMyMovie = movie => dispatch => {
  {
    axios
      .post("/movies", movie)
      .then(res => {
        dispatch(loadMyMovieList());
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const removeMyMovie = id => dispatch => {
  axios
    .delete("/movies/" + id)
    .then(res => {
      dispatch(loadMyMovieList());
    })
    .catch(err => {
      console.log(err);
    });
};
