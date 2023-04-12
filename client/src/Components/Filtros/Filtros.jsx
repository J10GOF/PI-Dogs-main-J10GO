import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDogs,
  orderByWeight,
  orderAlphabetically,
  createdInDb,
  getTemperaments,
  filteredByTemperament,
} from "../../actions/actions.js";
import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx";
import Paginated from "../Paginado/Paginado.jsx"
import style from '../Home/Home.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function Filtros() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //Me trae del reducer el estado dogs con todos los perros
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const LastDogIndex = currentPage * dogsPerPage;
  const FirstDogIndex = LastDogIndex - dogsPerPage;
  const currentDogs = allDogs.slice(FirstDogIndex, LastDogIndex);
  const [order, setOrder] = useState("");
  const allTemperaments = useSelector((state) => state.temperaments);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleTemperament(e) {
    e.preventDefault();
    dispatch(filteredByTemperament(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  function handerSortAlphabetically(e) {
    e.preventDefault();
    dispatch(orderAlphabetically(e.target.value));
    setOrder(e.target.value);
    setCurrentPage(1);
  }

  function handleSortWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setOrder(e.target.value);
    setCurrentPage(1);
  }

  function handleCreatedDb(e) {
    e.preventDefault();
    dispatch(createdInDb(e.target.value));
    setOrder(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div>
      <div>
        <select onChange={(e) => handerSortAlphabetically(e)} value="disabled">
          <option value="">Orden alfabético</option>
          <option value="ascendente">A - Z</option>
          <option value="descendente">Z - A</option>
        </select>

        <select onChange={(e) => handleSortWeight(e)} value="disabled">
          <option value="">Ordenar por peso</option>
          <option value="weightMin">Menos Pesados</option>
          <option value="weightMax">Mas Pesados</option>
        </select>

        <select
          onChange={(e) => {
            handleTemperament(e);
          }}
          value="disabled"
        >
          <option value="">Temperamentos</option>
          {allTemperaments?.map((el) => (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => handleCreatedDb(e)} value="disabled">
          <option value="">App</option>
          <option value="apiDogs">Dogs API</option>
          <option value="dbDogs">Dogs DB</option>
        </select>
      </div>

      <SearchBar/>

      {allDogs.length > 7 ? (
        <Paginated
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginated={paginated}
        />
      ) : null}

      <div className={style.cardsConteiner}>
        {currentDogs?.map((el) => {
          return (
            <div key={el.id}>
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                heightMin={el.heightMin}
                heightMax={el.heightMax}
                weightMin={el.weightMin}
                weightMax={el.weightMax}
                temperament={el.temperament}
                life_span={el.life_span}
              />
              {/*<Link to={`/home/${el.id}`}>
                <button>Mas Info</button>
              </Link>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}