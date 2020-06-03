import React, { Component } from "react";
import Name from "../pokemonsInfo/pokemonName";
import { Link, Router } from "react-router-dom";
import Features from "../pokemonsInfo/featuresContainer";

class MainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //results contains the very first json
      results: "",

      //id is the pokemon id, it's passed on props
      id: "",
      //name is the pokemon name, it's passed on props
      name: "",
      //url is get on results, it contains the url to be
      //query at nextQuery to get more info about the pokemon selected
      url: "",
    };
    console.log(props);
  }

  componentDidMount = () => {
    let { id, name } = this.props;
    this.setState({
      id: id - 1,
      name: name,
    });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data.results,
          url: data.results[this.state.id].url,
        });
      });
  };

  render() {
    let { name } = this.state;
    return (
      <div>
        <Name name={name} />
        <Features url={this.state.url} />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default MainInfo;
