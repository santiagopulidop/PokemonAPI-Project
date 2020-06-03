import React from "react";
const Card = ({ name, imgUrl, id }) => {
  return (
    <div className="card m-3" id={id} style={{ width: "18rem" }}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <p className="card-text">{name[0].toUpperCase() + name.slice(1)}</p>
      </div>
    </div>
  );
};

export default Card;
