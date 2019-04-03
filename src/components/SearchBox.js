import React, { Component } from "react";
import { connect } from "react-redux";
import { loadSearch } from "../actions";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }
  onChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={this.onChange}
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

const mapDispatchToProps = dispatch => {
  return {
    loadSearch: searchTerm => dispatch(loadSearch(searchTerm))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
