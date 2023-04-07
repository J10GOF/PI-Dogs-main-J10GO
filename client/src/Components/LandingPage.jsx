import React from "react";
import { Link } from "react-router.dom";
//import Style from "./StylesComponents/LandingPage.module.css";

export default function LandingPage() {
	return (
		<div>
			<h1>Bienvenido</h1>
			<h3>Mediante esta pagina podras ver las diferentes razas y tipos de perros que existen</h3>
			<Link to = '/home'>
				<button>Ver Perros</button>
			</Link>
		</div>
		)
}