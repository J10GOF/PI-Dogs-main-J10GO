import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails } from "../../actions/actions.js";
import { useParams } from "react-router";
import style from './Details.module.css'

export default function Details() {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("ID", details);
  console.log("DETAIlS", details);

  useEffect(() => {
    //dispatch(cleaner());
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const dogDetails = useSelector((state) => state.details);
    return (
      <div className={style.classDiv}>
      <div lassName={style.detail}>
        <img className={style.img} src={dogDetails.image} alt="Not Found" />
          <h2 className={style.h2}>{dogDetails.name} </h2>
          <h5>Altura mínima: {dogDetails.heightMin} Cm</h5>
          <h5>Altura maxima: {dogDetails.heightMax} Cm</h5>
          <h5>Peso Minimo: {dogDetails.weightMin} Kg</h5>
          <h5>Peso Maximo: {dogDetails.weightMax} Kg</h5>
          <h5>Años de vida: {dogDetails.life_span} años</h5>
          <h5>Temperamentos: {dogDetails.temperament}</h5>
        <Link to="/home">
          <button className={style.Boton}>Atras</button>
        </Link>
      </div>
      </div>
    );
}