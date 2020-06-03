import React from "react";
const Card = ({ name, imgUrl, id }) => {
  return (
    <div id={id} lassName="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default Card;
