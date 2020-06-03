import React, { Component } from "react";
import Card from "./card";

class PokemonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      search: false,
    };
  }
  componentWillMount() {
    const { data, input } = this.props;
    this.setState({
      pokemons: data,
    });
    if (input !== undefined) {
      this.setState({
        search: true,
      });
    }
  }
  render() {
    const { pokemons, search } = this.state;
    const { input } = this.props;
    if (search) {
      return (
        <div className="row p-3 d-flex justify-content-around">
          {pokemons
            .filter((pokemon) => {
              return pokemon.name.includes(input.toLowerCase());
            })
            .map((value, index) => {
              return (
                <Card
                  id={index + 1}
                  key={index}
                  imgUrl={value.url}
                  name={value.name}
                />
              );
            })}
        </div>
      );
    }
    return (
      <div className="row p-3 d-flex justify-content-around">
        {pokemons.map((value, index) => {
          return (
            <Card
              id={index + 1}
              key={index}
              imgUrl={value.url}
              name={value.name}
            />
          );
        })}
      </div>
    );
  }
}

export default PokemonContainer;
