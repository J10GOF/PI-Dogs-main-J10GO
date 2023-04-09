import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Bienvenido a la app de perros</h1>
      <Link to="/home">
        <button>Ir a la APP</button>
      </Link>
    </div>
  );
}