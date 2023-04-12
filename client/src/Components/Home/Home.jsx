import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Filtros from '../Filtros/Filtros.jsx'
import ChargeAllDogs from '../CargarAllDogs/CargarAllDogs.jsx'
import Style from './Home.module.css'

export default function Home() {
  return (
    <div className={Style.ContenedorHome}>
    <h1 className={Style.TituloHome}>APP de perros</h1>
      <ChargeAllDogs/>
      <Filtros/>
    </div>
  );
}