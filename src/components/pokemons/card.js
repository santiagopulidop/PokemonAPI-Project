import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonTypes: [],
      pokemonEvolves: "",
      loading: true,
    };
  }
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + this.props.id)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pokemonTypes: data.types,
        });
        fetch(data.species.url)
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              pokemonEvolves:
                data.evolves_from_species !== null
                  ? data.evolves_from_species.name
                  : null,
              loading: false,
            });
          });
      });
  }
  render() {
    const { name, id, imgUrl } = this.props;
    const { pokemonTypes, loading, pokemonEvolves } = this.state;

    if (!loading) {
      return (
        <Link
          to={`/PokemonInfo/${id}${name}`}
          style={{ textDecoration: "none" }}
        >
          <div
            className="card m-3"
            id={id}
            onClick={(e) => console.dir(e.currentTarget)}
            title={imgUrl}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-rigth">
              <span className="number">ID / {id}</span>
              <p className="card-text" id="text">
                {name[0].toUpperCase() + name.slice(1)}
              </p>
              <div className="types">
                {pokemonTypes.map((value, index) => {
                  return (
                    <span className="item" key={index}>
                      {value.type.name.toUpperCase()}
                    </span>
                  );
                })}
              </div>
              {pokemonEvolves !== null ? (
                <div className="evolves">
                  Evolves from
                  <p>{pokemonEvolves}</p>
                </div>
              ) : undefined}
            </div>
          </div>
        </Link>
      );
    }
    return <div>loading...</div>;
  }
}

export default Card;
