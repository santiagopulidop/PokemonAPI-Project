import React, { Component } from "react";
import Name from "../pokemonsInfo/pokemonName";
import { Link, Router } from "react-router-dom";

class MainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  click = (e) => {
    console.log(e.target);
  };

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/2/")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  };

  render() {
    console.log(this.props.location);
    return (
      <div>
        <Name />

        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default MainInfo;
