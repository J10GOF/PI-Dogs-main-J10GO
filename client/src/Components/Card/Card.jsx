import React from "react";

export default function Card({id, name, image, temperament,   weightMin, weightMax, life_span}) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={image} alt="Imagen Dañada" width="200px" height="250px"/>
      <h3>{temperament}</h3>
      <h3>{weightMin}</h3>
      <h3>{weightMax}</h3>
    </div>
  );
}