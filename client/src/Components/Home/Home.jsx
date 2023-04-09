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
import Paginated from "../Paginado/Paginado.jsx";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Style from './Home.module.css';


export default function Home() {
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
    dispatch(getTemperaments());
    dispatch(getAllDogs());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllDogs());
  }

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
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div>

      <Link to="/dogs"></Link>

      <h1>APP de perros</h1>

      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        cargar todos los perros
      </button>

      <div>
        <select onChange={(e) => handerSortAlphabetically(e)} value="disabled">
          <option value="">Orden Alfebetico</option>
          <option value="ascendente">A to Z</option>
          <option value="descendente">Z to A</option>
        </select>

        <select onChange={(e) => handleSortWeight(e)} value="disabled">
          <option>Order by weight</option>
          <option value="weightMin">Min weight</option>
          <option value="weightMax">Max weight</option>
        </select>

        <select
          onChange={(e) => {
            handleTemperament(e);
          }}
          value="disabled"
        >
          <option>Temperamentos</option>
          {allTemperaments &&
            allTemperaments.map((el) => (
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

      <Paginated
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginated={paginated}
      />

      <div className={Style.cardsConteiner}>
        {currentDogs?.map((el) => {
          return (
            <div key={el.id}>
              <Link to={"/home/" + el.id}>
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  weightMin={el.weightMin}
                  weightMax={el.weightMax}
                  temperament={el.temperament}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}