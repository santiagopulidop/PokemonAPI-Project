import React, { Component } from "react";
import Title from "../pokemons/title";
import Search from "../pokemons/searchBar";
import PokemonContainer from "../pokemons/pokemonContainer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: undefined,
      loading: true,
    };
  }

  componentDidMount = () => {
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data.results,
          loading: false,
        });
      });
  };
  render() {
    if (!this.state.loading) {
      return (
        <div className="container-fluid">
          <Title />
          <Search />
          <PokemonContainer data={this.state.results} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Home;
