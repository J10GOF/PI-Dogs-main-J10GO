import React from 'react';

export default function Card({id, name, image, temperament, weight, height, life_span}){
	return (
		<div>
			<h2>{name}</h2>
			<img src="{image}" alt="Imagen Dañada" width="200px" height="250px"/>
			<h3>ID: {id}</h3>
			<h3>{temperament}</h3>
			<h3>Peso: {weight}</h3>
			<h3>Altura: {height}</h3>
			<h3>esperanza de vida: {life_span}</h3>
		</div>
		);
}