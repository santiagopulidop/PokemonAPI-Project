import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, id, imgUrl }) => {
  return (
<<<<<<< HEAD
    <Link to={`/PokemonInfo/${id}${name}`} style={{ textDecoration: "none" }}>
      <div className="card m-3" id={id} style={{ width: "18rem" }}>
=======
    <Link to={`/PokemonInfo/${id}${name}`}>
      <div
        className="card m-3"
        id={id}
        style={{ width: "18rem" }}
        onClick={(e) => console.dir(e.currentTarget)}
        title={imgUrl}
      >
>>>>>>> fb838e69415890273c13cc7809df31f300a02760
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <p className="card-text" id="text">
            {name[0].toUpperCase() + name.slice(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
