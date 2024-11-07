import React from "react";

const Card = ({ marca, modelo }) => {
  return (
    <div className="card">
      <h3>Información del auto</h3>
      <p><strong>Marca:</strong> {marca}</p>
      <p><strong>Modelo:</strong> {modelo}</p>
    </div>
  );
};

export default Card;
