import React from "react";
import Style from './Card.module.css';
import { Link } from "react-router-dom";

export default function Card({id, name, image, temperament, /*heightMin, heightMax,*/ weightMin, weightMax, life_span}) {
  return (
    <div key={id} className={Style.card}>
      <h2>{name}</h2>
      <img src={image} alt="Imagen Dañada" width="150px" height="100px"/>
      <h3>Temperamentos:</h3>
      <h3>{temperament}</h3>
      {/*<h3>Peso Minimo: {weightMin}</h3>
      <h3>Peso Maximo: {weightMax}</h3>
      <h3>Altura Minima: {heightMin}</h3>
      <h3>Altura Maxima: {heightMax}</h3>*/}
      <h3>Años de vida: {life_span}</h3>
      <Link to={`/home/${id}`}>
        <button>Mas Info</button>
      </Link>
    </div>
  );
}