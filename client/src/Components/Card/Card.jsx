import React from "react";
import Style from './Card.module.css';

export default function Card({id, name, image, temperament,   weightMin, weightMax, life_span}) {
  return (
    <div key={id} className={Style.card}>
      <h2>{name}</h2>
      <img src={image} alt="Imagen Dañada" width="150px" height="100px"/>
      <h3>{temperament}</h3>
      <h3>{weightMin}</h3>
      <h3>{weightMax}</h3>
    </div>
  );
}