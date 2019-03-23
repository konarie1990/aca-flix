import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../src/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// ### Store
// * Create our standard store.js file
// * Use redux-thunk middleware
// * Import reducers
// * create store and export
