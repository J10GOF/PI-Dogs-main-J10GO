import React from 'react';
//import { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux'

const Filtros = () => {

	return (
		<div>
			<div>
				<h3>Orden Alfabetico</h3>
				<select>
					<option value="acendente">Acendente</option>
					<option value="decendente">Decendente</option>
				</select>
			</div>
			<div>
				<h3>Temperamentos</h3>
				<select>
					<option>Aqui van los Temperamentos</option>
					<option>Temperamento 1</option>
					<option>Temperamento 2</option>
				</select>
			</div>
		</div>
		)
}

export default Filtros;