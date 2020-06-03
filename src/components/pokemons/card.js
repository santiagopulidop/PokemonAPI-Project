import React from "react";
const Card = ({ name, imgUrl }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default Card;
