// SearchBox was one of the culprits as to why I was stuck - I created containers and calling mapStateToProps in both files *CORRECTED

import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    searchTerm: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={e => this.setState({ searchTerm: e.target.value })}
          onKeyUp={e => {
            if (
              this.props.loadSearch &&
              e.key === "Enter" &&
              this.state.searchTerm
            ) {
              this.props.loadSearch(this.state.searchTerm);
            }
          }}
          type="search"
          placeholder="Search for a title..."
        />
      </div>
    );
  }
}

export default SearchBox;
