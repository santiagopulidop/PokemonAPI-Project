import React, { Component } from "react";
import Title from "../pokemons/title";
import Search from "../pokemons/searchBar";
import PokemonContainer from "../pokemons/pokemonContainer";
import "../pokemons/searchBar.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
      loading: true,
      searchInput: "",
    };
  }
  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data.results,
          loading: false,
        });
      });
  };
  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  render() {
    const { results, loading, searchInput } = this.state;
    if (!loading) {
      return (
        <div className="container-fluid">
          <Title />
          <Search clickHandler={this.handleChange} />
          <PokemonContainer data={results} input={searchInput} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Home;
