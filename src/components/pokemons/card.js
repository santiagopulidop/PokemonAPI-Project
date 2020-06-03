import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, id, imgUrl }) => {
  return (
    <Link to={`/PokemonInfo/${id}${name}`}>
      <div
        className="card m-3"
        id={id}
        style={{ width: "18rem" }}
        onClick={(e) => console.dir(e.currentTarget)}
        title={imgUrl}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <p className="card-text">{name[0].toUpperCase() + name.slice(1)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
