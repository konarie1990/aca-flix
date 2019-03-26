export const loadMyMovieList = () => dispatch => {
  dispatch({
    type: "LOAD_MY_MOVIE_LIST"
  });
  fetch(
    "/movies"
      .then(response => {
        return response.json();
      })
      .then(movies => {
        dispatch(myMovieListLoaded(movies));
      })
  );
};

export const myMovieListLoaded = movies => {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
};

export const loadSearch = () => dispatch => {
  dispatch({
    type: "LOAD_SEARCH"
  });
  fetch(
    `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=b627c3bab35d14cf33ffdeca5e332c80`
  )
    .then(response => {
      return response.json();
    })
    .then(movies => {
      dispatch(searchLoaded(movies));
    });
};

export const searchLoaded = movies => {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  };
};

export const saveMyMovie = () => dispatch => {
  dispatch({
    type: "POST"
  });
  fetch(
    "/movies"
      .then(response => {
        return response.json();
      })
      .then(movies => {
        dispatch(loadMyMovieList(movies));
      })
  );
};

export const removeMyMovie = id => {
  return fetch(/movies/ + "/" + id, {
    method: "DELETE"
  }).then(() => {
    dispatch(loadMyMovieList());
  });
};
