import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs } from "../../actions/actions.js";

export default function ChargeAllDogs() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllDogs());
  }

  return (
    <div>
      <Link to="/dogs">
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
         Renderizar todos los perros
        </button>
      </Link>
      <Link to="/dog">
        <button >Crear Perro</button>
      </Link>
    </div>
  );
}