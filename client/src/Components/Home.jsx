import React from 'react';
import {/*useState,*/ useEffect} from 'react';
import {useDispatch, /*useSelector*/} from 'react-redux';
import {getAllDogs} from '../actions/actions.js';
import { Link } from 'react-router-dom';
import Filters from './Filters.jsx';
import Card from './Card.jsx';

export default function Home() {
	const dispatch = useDispatch()
	//const allDogs = useSelector ((state) => state.dogs) //con useSelector traeme todo lo que esta en el estado global de dogs

	useEffect(() => {
		dispatch(getAllDogs());
	},[dispatch])

	function handleClick(e){
		e.preventDefault();
		dispatch(getAllDogs());
	}

	return (
		<div>
			<Link  to = '/dog'>Crear Perro</Link>
			<h1>Aqui estan los perros:</h1>
			<button onClick = {e => {handleClick(e)}}>Recargar Perros</button>
			<Filters />
			{getAllDogs && getAllDogs.map((el) => (
				<Card
        		name={el.name}
        image={el.image}
        id={el.id}
        temperaments={el.temperaments}
        weight={el.weight}
        height={el.height}
        life_span={el.life_span}
    />
))}

		</div>
		);
}