import React from "react";
import { Link } from "react-router-dom";
import Style from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={Style.div}>
      <h1 className={Style.Titulo}>Bienvenido a la app de perros</h1>
      <Link to="/home">
        <button className={Style.Boton}>Ir a la APP</button>
      </Link>
    </div>
  );
}