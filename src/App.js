import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import Navigation from "../src/components/Navigation";
import UserProfile from "../src/components/UserProfile";
import { loadMyMovieList } from "./actions";

class App extends Component {
  componentDidMount = () => {
    loadMyMovieList();
  };

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <SearchBoxContainer />
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" movies={this.props.searchResults} />
        <TitleList title="My Movies" movies={this.props.myMovieList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    myMoveiList: state.myMoveiList
  };
};

export default connect(
  mapStateToProps,
  { loadMyMovieList }
)(App);
