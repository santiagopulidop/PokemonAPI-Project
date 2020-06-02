import React, { Component } from "react";
import Card from "./card";
class PokemonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }
  componentWillMount() {
    this.setState({
      pokemons: this.props.data,
    });
  }
  render() {
    const { pokemons } = this.state;
    return (
      <div className="row p-3">
        {console.log(pokemons[0].name)}
        <Card imgUrl="" name="Doraemon" />
      </div>
    );
  }
}

export default PokemonContainer;
