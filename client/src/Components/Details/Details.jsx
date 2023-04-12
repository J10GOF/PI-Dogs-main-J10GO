import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails } from "../../actions/actions.js";
import { useParams } from "react-router";

export default function Details() {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("ID", details);
  console.log("DETAIlS", details);

  useEffect(() => {
    dispatch(cleaner());
    dispatch(getDetails(id));
  }, [dispatch, id]);

  if (details) {
    return (
      <div>
      <img src={details.image} alt="Not found" />
        <h2>{details.name} </h2>
        <h5>Min weight: {details.weightMin} </h5>
        <h5>Max weight: {details.weightMax} </h5>
        <h5>Min height: {details.heightMin} </h5>
        <h5>Max height: {details.heightMax} </h5>
        <h5>Tiempo de vida: {details.life_span} </h5>
        <h5>Temperaments: {details.temperament}</h5>
        <Link to="/home">
          <button>Atras</button>
        </Link>
      </div>
    );
    } else {
    return (
      <div>
        Cargando...
        <Link to="/home">
          <button>Atras</button>
        </Link>
      </div>
    );
  }
}