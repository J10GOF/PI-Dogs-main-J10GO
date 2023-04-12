import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Filtros from '../Filtros/Filtros.jsx'
import ChargeAllDogs from '../CargarAllDogs/CargarAllDogs.jsx'

export default function Home() {
  return (
    <div>
    <h1>APP de perros</h1>
      <ChargeAllDogs/>
      <Filtros/>
    </div>
  );
}