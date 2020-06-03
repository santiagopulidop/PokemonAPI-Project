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
      <div className="row p-3 d-flex justify-content-around">
        {pokemons.map((value, index) => {
          return (
            <Card id={index} key={index} imgUrl={value.url} name={value.name} />
          );
        })}
      </div>
    );
  }
}

export default PokemonContainer;
