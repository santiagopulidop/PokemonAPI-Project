import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { clickHandler } = this.props;
    return (
      <div className="px-4">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for Pokémon"
          aria-label="Search"
          onChange={clickHandler}
        />
        <button className="btn my-2 my-sm-0" type="button"></button>
      </div>
    );
  }
}

export default Search;
