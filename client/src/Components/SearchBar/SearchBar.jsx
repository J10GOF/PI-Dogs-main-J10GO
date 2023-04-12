import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByQuery } from "../../actions/actions.js";
import Style from './SearchBar.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getDogsByQuery(name));
    setName("");
  }

  //MANEJO ESTADO LOCAL LO QUE ESCRIBE EL USUARIO SE GUARDA EN MI ESTADO LOCAL NAME Y ESO ES LO QUE DESPACHO

  return (
    <div className={Style.divSearchBar}>
      <input
        className={Style.InputBuscar}
        value={name}
        type="text"
        placeholder="Buscar Perros"
        onChange={(e) => handleInputChange(e)}
      />
      <button className={Style.Buscar} type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
}