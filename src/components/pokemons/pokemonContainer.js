import React, { Component } from "react";
import Card from "./card";
import "./card.css";

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
    //Si SEARCH es true imprime solo las CARD que incluyan el INPUT TEXT del SEARCH
    if (search) {
      return (
        <div className="row p-3 d-flex justify-content-around">
          {pokemons.map((pokemon, index) => {
            if (pokemon.name.includes(input.toLowerCase()))
              return (
                <Card
                  id={index + 1}
                  key={index}
                  imgUrl={pokemon.url}
                  name={pokemon.name}
                />
              );
            return;
          })}
        </div>
      );
    }
    //Si NO imprime las 25 CARDS por defecto
    return (
      <div className="row p-3 d-flex justify-content-around">
        {pokemons.map((pokemon, index) => {
          return (
            <Card
              id={index + 1}
              key={index}
              imgUrl={pokemon.url}
              name={pokemon.name}
            />
          );
        })}
      </div>
    );
  }
}

export default PokemonContainer;
